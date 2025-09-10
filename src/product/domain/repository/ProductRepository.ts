import type { Result } from "../../../core/Types/Result";
import type { ProductEntity } from "../Entity/Product";
import type { addProductDto } from "@/product/application/data/product_remote_data_source";

export abstract class ProductRepository {
  abstract add(product: ProductEntity[]): Promise<Result<ProductEntity[]>>;

  abstract getAll(
    page: number,
    limit: number
  ): Promise<Result<ProductEntity[]>>;

  abstract getOneByName(data: addProductDto): Promise<Result<ProductEntity>>;

  abstract update(product: ProductEntity): Promise<Result<void>>;

  abstract sendFiles(file: FormData): Promise<Result<void>>;

  abstract delete(productId: string): Promise<Result<void>>;
}
