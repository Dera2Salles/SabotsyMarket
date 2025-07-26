import type { Result } from "./../Types/Result";
import type { ProductEntity } from "../Entities/Product";
import { ProductNotFoundException } from "../Exceptions";

export interface ProductRepository {
  insertOne(product: ProductEntity): Promise<Result<void, Error>>;

  insertMany(product: ProductEntity[]): Promise<Result<void, Error>>;

  getAll(): Promise<Result<ProductEntity[], Error>>;

  getOneByName(
    productName: string
  ): Promise<Result<ProductEntity, ProductNotFoundException>>;

  update(product: ProductEntity): Promise<Result<void, Error>>;

  // deleteOneById(productId: number): Promise<Result<void>>;
}
