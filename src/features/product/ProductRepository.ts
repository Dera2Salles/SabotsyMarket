import type { Result } from '../../core/Types/Result';
import type { ProductEntity } from './ProductEntity';
import type { addProductDto } from '@/features/product/ProductRemoteDataSource';

export abstract class ProductRepository {
  abstract add(product: ProductEntity[]): Promise<Result<void>>;

  abstract getAll(
    page: number,
    limit: number,
  ): Promise<Result<ProductEntity[]>>;

  abstract getOneByName(data: addProductDto): Promise<Result<ProductEntity>>;

  abstract update(product: ProductEntity): Promise<Result<void>>;

  abstract sendFiles(file: FormData): Promise<Result<void>>;

  abstract delete(productId: string): Promise<Result<void>>;
}
