import { GetOneProduct } from "./GetOneProduct";
import { ProductRepositoryImp } from "../../repository/ProductRepository";

import { mockProductSource } from "../../../test/mockedProductSource";

import type { ProductEntity } from "../../../domain/Entities/Product";

import type { Result } from "../../../domain/Types/Result";
import { ProductNotFoundException } from "../../../domain/Exceptions";

const productRepo: ProductRepositoryImp = new ProductRepositoryImp(
  mockProductSource
);
const getOneProduct: GetOneProduct = new GetOneProduct(productRepo);

describe("Get product use case test", () => {
  it("should return one product and a succes result", async () => {
    const product: ProductEntity = {
      id: 12,
      producerId: 13,
      price: 2000,
      unit: 20,
      name: "Caviar",
    };

    const getOneProductResult: Result<ProductEntity, ProductNotFoundException> =
      {
        status: "success",
        data: product,
      };

    mockProductSource.getOneByName.mockResolvedValue(getOneProductResult);

    const getOneProductUseCaseResult = await getOneProduct.execute("Caviar");
    expect(mockProductSource.getOneByName).toHaveBeenCalledWith(product.name);
    expect(getOneProductUseCaseResult).toEqual(getOneProductResult);
  });

  it("should return productNotFoundException if not found", async () => {
    const product: ProductEntity = {
      id: 12,
      producerId: 13,
      price: 2000,
      unit: 20,
      name: "Caviar",
    };

    const getOneProductResult: Result<ProductEntity, ProductNotFoundException> =
      {
        status: "failure",
        error: new ProductNotFoundException(),
      };

    mockProductSource.getOneByName.mockResolvedValue(getOneProductResult);

    const getOneProductUseCaseResult = await getOneProduct.execute("Caviar");
    expect(mockProductSource.getOneByName).toHaveBeenCalledWith(product.name);
    expect(getOneProductUseCaseResult).toEqual(getOneProductResult);
  });

  it("should return random execption", async () => {
    const product: ProductEntity = {
      id: 12,
      producerId: 13,
      price: 2000,
      unit: 20,
      name: "Caviar",
    };

    const getOneProductResult: Result<ProductEntity, ProductNotFoundException> =
      {
        status: "failure",
        error: new Error(),
      };

    mockProductSource.getOneByName.mockResolvedValue(getOneProductResult);

    const getOneProductUseCaseResult = await getOneProduct.execute("Caviar");
    expect(mockProductSource.getOneByName).toHaveBeenCalledWith(product.name);
    expect(getOneProductUseCaseResult).toEqual(getOneProductResult);
  });
});
