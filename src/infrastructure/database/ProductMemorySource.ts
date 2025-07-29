import type { ProductEntity } from "../../domain/Entities/Product";

import { ProductNotFoundException } from "../../domain/Exceptions";

import type { ProductRepository } from "../../domain/repository/ProductRepository";

import type { RESULT } from "../../domain/Types";
import { failure, success } from "../../domain/Types/Result";

export class ProductMemoryStorage implements ProductRepository {
  private product: ProductEntity[] = [
    {
      id: 1,
      producerId: 13,
      price: 2000,
      unit: 10,
      name: "Caviar",
      category: "Rare",
      unitOnCart: 0,
    },
    {
      id: 2,
      producerId: 12,
      price: 3000,
      unit: 2,
      name: "Fugu",
      category: "Toxique",
      unitOnCart: 0,
    },
    {
      id: 3,
      producerId: 11,
      price: 5000,
      unit: 20,
      name: "Ramen",
      category: "Japon",
      unitOnCart: 0,
    },
    {
      id: 4,
      producerId: 11,
      price: 5000,
      unit: 20,
      name: "Frampay",
      category: "gasy",
      unitOnCart: 0,
    },
    {
      id: 5,
      producerId: 11,
      price: 5000,
      unit: 20,
      name: "Dragon",
      category: "chinoise",
      unitOnCart: 0,
    },
    {
      id: 6,
      producerId: 11,
      price: 5000,
      unit: 20,
      name: "Nezuko",
      category: "Japon",
      unitOnCart: 0,
    },
    {
      id: 7,
      producerId: 11,
      price: 5000,
      unit: 20,
      name: "Vary",
      category: "gasy",
      unitOnCart: 0,
    },
    {
      id: 8,
      producerId: 11,
      price: 5000,
      unit: 20,
      name: "Ra tsy men",
      category: "gasy",
      unitOnCart: 0,
    },
    {
      id: 9,
      producerId: 11,
      price: 5000,
      unit: 20,
      name: "Tortue genial",
      category: "wtf",
      unitOnCart: 0,
    },
    {
      id: 10,
      producerId: 11,
      price: 5000,
      unit: 20,
      name: "Kamehameha",
      category: "wtf",
      unitOnCart: 0,
    },
    {
      id: 11,
      producerId: 11,
      price: 5000,
      unit: 20,
      name: "Wendy Cathalina",
      category: "gasy",
      unitOnCart: 0,
    },
    {
      id: 12,
      producerId: 11,
      price: 5000,
      unit: 20,
      name: "Mémé tsy Turbo",
      category: "wtf",
      unitOnCart: 0,
    },
    {
      id: 13,
      producerId: 11,
      price: 5000,
      unit: 20,
      name: "Turbo",
      category: "wtf",
      unitOnCart: 0,
    },
    {
      id: 14,
      producerId: 11,
      price: 5000,
      unit: 20,
      name: "Carotte",
      category: "legume",
      unitOnCart: 0,
    },
  ]; // Fake Data

  async getOneByName(
    productName: string
  ): Promise<RESULT<ProductEntity, ProductNotFoundException>> {
    const product = this.product.find(
      (productItem) => productItem.name === productName
    );
    if (!product) return failure(new ProductNotFoundException());
    return success(product);
  }

  async insertOne(product: ProductEntity): Promise<RESULT<void>> {
    const result = this.product.push(product);

    if (!result) return failure(new Error("Database insertion Error"));

    return success(undefined);
  }

  async insertMany(product: ProductEntity[]): Promise<RESULT<void>> {
    for (const productItem of product) {
      this.product.push(productItem);
    }
    return success(undefined);
  }

  async getAll(): Promise<RESULT<ProductEntity[], Error>> {
    const product = this.product.map((productItem) => productItem);
    if (!product) return failure(new Error("Database error"));
    return success(product);
  }

  async update(_product: ProductEntity): Promise<RESULT<void>> {
    return success(undefined);
  }
}
