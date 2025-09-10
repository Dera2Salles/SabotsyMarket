import { InsertManyProduct } from "./InsertManyProduct";

import type { ProductEntity } from "../../domain/Entity/Product";
import { ProductRepositoryImp } from "../ProductRepository";

import type { Result } from "../../../core/Types/Result";

import { ProductNotFoundException } from "../../../core/Exceptions";

import { mockProductSource } from "../../../test/mockedProductSource";

const productRepositoryImp = new ProductRepositoryImp(mockProductSource);
const insertManyProdut: InsertManyProduct = new InsertManyProduct(
  productRepositoryImp
);

describe("Insert many product test", () => {
  it("Should insert all product if not exist and return result succes", async () => {
    const failStatusResult: Result<ProductEntity, ProductNotFoundException> = {
      status: "failure",
      error: new ProductNotFoundException(),
    };

    const succesStatusResult: Result<void> = {
      status: "success",
      data: undefined,
    };

    const fakeProductListToInsert: ProductEntity[] = [
      {
        id: 12,
        producerId: 13,
        price: 2000,
        unit: 20,
        name: "Caviar",
        category: "Rare",
      },
      {
        id: 12,
        producerId: 13,
        price: 2000,
        unit: 20,
        name: "Caviar",
        category: "Rare",
      },
      {
        id: 12,
        producerId: 13,
        price: 2000,
        unit: 20,
        name: "Caviar",
        category: "Rare",
      },
    ];
    const calledTimes: number = fakeProductListToInsert.length;

    mockProductSource.getOneByName.mockResolvedValue(failStatusResult);
    mockProductSource.insertOne.mockResolvedValue(succesStatusResult);

    const insertManyProductResult = await insertManyProdut.execute(
      fakeProductListToInsert
    );

    expect(mockProductSource.insertOne).toHaveBeenCalledTimes(calledTimes);

    for (const productItem of fakeProductListToInsert) {
      expect(mockProductSource.insertOne).toHaveBeenCalledWith(productItem);
    }

    expect(insertManyProductResult).toEqual(succesStatusResult);
  });

  it("Should increase product's unit if exist and return result succes", async () => {
    const insertStatusResult: Result<void> = {
      status: "success",
      data: undefined,
    };

    const updateResult: Result<void> = {
      status: "success",
      data: undefined,
    };

    const getOneByNameStatusResult: Result<
      ProductEntity,
      ProductNotFoundException
    > = {
      status: "success",
      data: {
        id: 12,
        producerId: 13,
        price: 2000,
        unit: 20,
        name: "Caviar",
        category: "Rare",
      },
    };

    const fakeProductListToInsert: ProductEntity[] = [
      {
        id: 12,
        producerId: 13,
        price: 2000,
        unit: 20,
        name: "Caviar",
        category: "Rare",
      },
      {
        id: 12,
        producerId: 13,
        price: 2000,
        unit: 20,
        name: "Caviar",
        category: "Rare",
      },
      {
        id: 12,
        producerId: 13,
        price: 2000,
        unit: 20,
        name: "Caviar",
        category: "Rare",
      },
    ];
    const calledTimes: number = fakeProductListToInsert.length;

    mockProductSource.getOneByName.mockResolvedValue(getOneByNameStatusResult);

    mockProductSource.insertOne.mockResolvedValue(insertStatusResult);

    mockProductSource.update.mockResolvedValue(updateResult);

    const insertManyProductResult = await insertManyProdut.execute(
      fakeProductListToInsert
    );

    for (const productItem of fakeProductListToInsert) {
      expect(mockProductSource.update).toHaveBeenCalledWith({
        ...productItem,
        unit: productItem.unit + getOneByNameStatusResult.data.unit,
      });
    }
    expect(mockProductSource.update).toHaveBeenCalledTimes(calledTimes);

    expect(insertManyProductResult).toEqual(insertStatusResult);
  });
});
