import type { ProductEntity } from "../../domain/Entities/Product";
import type { ProductRepository } from "../../domain/repository/ProductRepository";
import type { RESULT as Result } from "../../domain/Types";
import { ProductNotFoundException } from "../../domain/Exceptions";
import { failure, success } from "../../domain/Types/Result";

import type {
  addProductDto,
  ProductServerSource,
} from "../datasources/product_remote_data_source";

export class ProductRepositoryImp implements ProductRepository {
  constructor(private readonly source: ProductServerSource) {}

  async add(products: ProductEntity[]): Promise<Result<void>> {
    try {
      await this.source.add(products);
      return success(undefined);
    } catch (error) {
      console.error(error);
      return failure(Error());
    }
  }

  async update(product: ProductEntity): Promise<Result<void>> {}

  async getAll(): Promise<Result<ProductEntity[]>> {
    try {
      const products = await this.source.getAll();
      return success(products);
    } catch (error) {
      console.error(error);
      return failure(Error());
    }
  }

  async getOneByName(
    data: addProductDto
  ): Promise<Result<ProductEntity, ProductNotFoundException>> {
    const product = await this.source.getOneByName(data);
    if (!product) {
      return failure(new ProductNotFoundException());
    }
    return success(product);
  }

  async sendFiles(file: FormData): Promise<Result<void>> {
    try {
      await this.source.sendFiles(file);
      return success(undefined);
    } catch (error) {
      console.error(error);
      return failure(Error());
    }
  }
}
