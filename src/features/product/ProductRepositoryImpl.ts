import type { ProductEntity } from './ProductEntity';
import type { ProductRepository } from './ProductRepository';
import type { RESULT as Result } from '../../core/Types';
import { ProductNotFoundException } from '../../core/Exceptions';
import { failure, success } from '../../core/Types/Result';

import type {
  addProductDto,
  ProductServerSource,
} from './ProductRemoteDataSource';

export class ProductRepositoryImp implements ProductRepository {
  constructor(private readonly source: ProductServerSource) {}

  async delete(productId: string): Promise<Result<void>> {
    try {
      await this.source.delete(productId);
      return success(undefined);
    } catch (error) {
      console.error(error);
      return failure(Error());
    }
  }

  async add(products: ProductEntity[]): Promise<Result<void>> {
    try {
      const result = await this.source.add(products);

      return success(undefined);
    } catch (error) {
      console.error(error);
      return failure(Error());
    }
  }

  async update(product: ProductEntity): Promise<Result<void>> {}

  async getAll(page: number, limit: number): Promise<Result<ProductEntity[]>> {
    try {
      const products = await this.source.getAll(page, limit);
      return success(products);
    } catch (error) {
      console.error(error);
      return failure(Error());
    }
  }

  async getOneByName(
    data: addProductDto,
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
