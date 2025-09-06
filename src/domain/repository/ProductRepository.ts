import type { Result } from "./../Types/Result";
import type { ProductEntity } from "../Entities/Product";
import type { addProductDto } from "@/application/datasources/product_remote_data_source";

export abstract class ProductRepository {
  abstract add(product: ProductEntity[]): Promise<Result<void>>;

  abstract getAll(
    page: number,
    limit: number
  ): Promise<Result<ProductEntity[]>>;

  abstract getOneByName(data: addProductDto): Promise<Result<ProductEntity>>;

  abstract update(product: ProductEntity): Promise<Result<void>>;

  abstract sendFiles(file: FormData): Promise<Result<void>>;

  // deleteOneById(productId: number): Promise<Result<void>>;
}
