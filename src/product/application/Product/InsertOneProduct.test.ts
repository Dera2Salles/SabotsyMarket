import { ProductRepositoryImp } from "../ProductRepository";

import { InsertOneProduct } from "./insertOneProduct";

import type { ProductEntity } from "../../domain/Entity/Product";

import type { Result } from "../../../core/Types/Result";

import { ProductNotFoundException } from "../../../core/Exceptions";

import { mockProductSource } from "../../../test/mockedProductSource";

describe("Product Use Case", () => {
  let productRepoImple: ProductRepositoryImp;
  let insertOneProduct: InsertOneProduct;

  beforeEach(() => {
    productRepoImple = new ProductRepositoryImp(mockProductSource);
    insertOneProduct = new InsertOneProduct(productRepoImple);

    jest.clearAllMocks();
  });

  it("Should create a product if not exist", async () => {
    const product: ProductEntity = {
      id: 12,
      producerId: 13,
      price: 2000,
      unit: 20,
      name: "Caviar",
      category: "Rare",
    };
    const result: Result<ProductEntity, ProductNotFoundException> = {
      status: "failure",
      error: new ProductNotFoundException(),
    };

    mockProductSource.getOneByName.mockResolvedValue(result);

    await insertOneProduct.execute(product);

    expect(mockProductSource.getOneByName).toHaveBeenCalledWith(product.name);
    expect(mockProductSource.insertOne).toHaveBeenCalledWith(product);
  });

  it("Should increase product's unit if  exist", async () => {
    const product: ProductEntity = {
      id: 12,
      producerId: 13,
      price: 2000,
      unit: 20,
      name: "Caviar",
      category: "Rare",
    };

    const productAfterUpdate: ProductEntity = {
      id: 12,
      producerId: 13,
      price: 2000,
      unit: 40,
      name: "Caviar",
      category: "Rare",
    };

    const result: Result<ProductEntity, ProductNotFoundException> = {
      status: "success",
      data: product,
    };

    const updateResult: Result<void, Error> = {
      status: "success",
      data: undefined,
    };

    mockProductSource.getOneByName.mockResolvedValue(result);
    mockProductSource.update.mockResolvedValue(updateResult);

    const status = await insertOneProduct.execute(product);
    expect(mockProductSource.getOneByName).toHaveBeenCalledWith(product.name);
    expect(mockProductSource.update).toHaveBeenCalledWith(productAfterUpdate);
    expect(status).toEqual(updateResult);
  });

  it("Should return the Database Error on insert product attempt", async () => {
    const product: ProductEntity = {
      id: 12,
      producerId: 13,
      price: 2000,
      unit: 20,
      name: "Caviar",
      category: "Rare",
    };
    const statusResult: Result<ProductEntity, ProductNotFoundException> = {
      status: "failure",
      error: new Error(),
    };

    mockProductSource.getOneByName.mockResolvedValue(statusResult);

    const status = await insertOneProduct.execute(product);
    console.log(status);
    expect(mockProductSource.getOneByName).toHaveBeenCalledWith(product.name);
    expect(status).toEqual(statusResult);
  });

  it("Should return the Database Error on update product attempt", async () => {
    const product: ProductEntity = {
      id: 12,
      producerId: 13,
      price: 2000,
      unit: 20,
      name: "Caviar",
      category: "Rare",
    };
    const getOneByNameStatusResult: Result<
      ProductEntity,
      ProductNotFoundException
    > = {
      status: "success",
      data: product,
    };

    const updateResult: Result<void, Error> = {
      status: "failure",
      error: new Error(),
    };

    mockProductSource.getOneByName.mockResolvedValue(getOneByNameStatusResult);
    mockProductSource.update.mockResolvedValue(updateResult);

    const insertStatus = await insertOneProduct.execute(product);
    console.log(insertStatus);
    expect(mockProductSource.getOneByName).toHaveBeenCalledWith(product.name);
    expect(insertStatus).toEqual(updateResult);
  });
});
