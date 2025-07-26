import type { ProductEntity } from "../../domain/Entities/Product";
import type { ProductRepository } from "../../domain/repository/ProductRepository";

import type { RESULT as Result } from "../../domain/Types";

import { ProductNotFoundException } from "../../domain/Exceptions";

import { failure, success } from "../../domain/Types/Result";

import { ProductModel } from "../../domain/models/Product";

export class ProductRepositoryImp implements ProductRepository {
  constructor(private source: ProductRepository) {}

  async insertOne(product: ProductEntity): Promise<Result<void, Error>> {
    const productOnTheMarketResult = await this.source.getOneByName(
      product.name
    );

    if (productOnTheMarketResult.status === "failure") {
      if (productOnTheMarketResult.error instanceof ProductNotFoundException) {
        return await this.source.insertOne(product);
      }
      return failure(productOnTheMarketResult.error);
    }

    const productOnTheMarket = new ProductModel(productOnTheMarketResult.data);
    productOnTheMarket.increaseUnit(product.unit);
    const productOnTheMarketToUpdate = productOnTheMarket.snapshot();

    const updateResult = await this.source.update(productOnTheMarketToUpdate);
    if (updateResult.status === "failure") {
      return failure(updateResult.error); // Return on first error
    }

    return success(undefined);
  }

  async insertMany(product: ProductEntity[]): Promise<Result<void, Error>> {
    for (const productItem of product) {
      const productOnTheMarketResult = await this.source.getOneByName(
        productItem.name
      );

      if (productOnTheMarketResult.status === "failure") {
        if (
          productOnTheMarketResult.error instanceof ProductNotFoundException
        ) {
          const insertResult = await this.source.insertOne(productItem);
          if (insertResult.status === "failure") {
            return failure(insertResult.error); // Return on first error
          }
        } else {
          return productOnTheMarketResult; // Return on unexpected error
        }
      } else {
        const productOnTheMarket = new ProductModel(
          productOnTheMarketResult.data
        );
        productOnTheMarket.increaseUnit(productItem.unit);
        const productOnTheMarketToUpdate = productOnTheMarket.snapshot();
        const updateResult = await this.source.update(
          productOnTheMarketToUpdate
        );
        if (updateResult.status === "failure") {
          return updateResult; // Return on first error
        }
      }
    }
    return success(undefined);
  }

  async update(product: ProductEntity): Promise<Result<void, Error>> {
    const productOnTheMarketResult = await this.source.getOneByName(
      product.name
    );

    if (productOnTheMarketResult.status === "failure") {
      return productOnTheMarketResult;
    }

    const productOnTheMarket = new ProductModel(productOnTheMarketResult.data);
    productOnTheMarket.update(product);
    const productOnTheMarketToUpdate = productOnTheMarket.snapshot();

    return await this.source.update(productOnTheMarketToUpdate);
  }

  async getAll(): Promise<Result<ProductEntity[], Error>> {
    const result = await this.source.getAll();
    if (result.status === "failure") {
      return failure(result.error);
    }

    return success(result.data);
  }

  async getOneByName(
    productName: string
  ): Promise<Result<ProductEntity, ProductNotFoundException>> {
    const result = await this.source.getOneByName(productName);

    if (result.status === "success") return success(result.data);

    if (result.error instanceof ProductNotFoundException)
      return failure(result.error);

    return failure(result.error);
  }

  // async deleteOneById(productId: number): Promise<RESULT<void>> {
  //   const result = await this.source.deleteOneById(productId);
  //   if (result.status === "failure") {
  //     return failure(result.error);
  //   }

  //   return success(result.value);
  // }
}
