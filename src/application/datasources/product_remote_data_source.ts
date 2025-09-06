import type { ProductEntity } from "@/domain/Entities/Product";
import { type AxiosInstance } from "axios";

export interface addProductDto {
  producerId: string;
  productName: string[];
}

export abstract class ProductServerSource {
  abstract getAll(page: number, limit: number): Promise<ProductEntity[]>;
  abstract getOneByName(data: addProductDto): Promise<ProductEntity>;
  abstract update(product: ProductEntity): Promise<void>;
  abstract add(product: ProductEntity[]): Promise<void>;
  abstract sendFiles(file: FormData): Promise<void>;
}

export class ProductRemoteDataSource implements ProductServerSource {
  constructor(private api: AxiosInstance) {}

  async getAll(page: number, limit: number): Promise<ProductEntity[]> {
    try {
      const response = await this.api.get(
        `http://localhost:5000/product?page=${page}&limit=${limit}`
      );
      const product: ProductEntity[] = response.data.data;
      return product;
    } catch (error) {
      console.error(error);
      throw new Error();
    }
  }

  async getOneByName(data: addProductDto): Promise<ProductEntity> {}

  async add(product: ProductEntity[]): Promise<void> {
    try {
      const response = await this.api.post(
        "http://localhost:5000/product",
        product
      );

      if (response.status != 201) throw new Error();
    } catch (error) {
      console.error(error);
      throw new Error();
    }
  }

  async sendFiles(file: FormData): Promise<void> {
    try {
      const response = await this.api.post(
        "http://localhost:5000/product/file",
        file,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status != 200) throw new Error();
    } catch (error) {
      console.error(error);
      throw new Error();
    }
  }

  async update(product: ProductEntity): Promise<void> {}
}
