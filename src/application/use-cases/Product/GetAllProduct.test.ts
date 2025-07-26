import { GetAllProduct } from "./GetAllProduct";
import type { ProductEntity } from "../../../domain/Entities/Product";
import { ProductRepositoryImp } from "../../repository/ProductRepository";

import type { Result } from "../../../domain/Types/Result";

import { mockProductSource } from "../../../test/mockedProductSource";

const getAllProduct: GetAllProduct;
const productRepository: ProductRepositoryImp;

productRepository = new ProductRepositoryImp(mockProductSource);
getAllProduct = new GetAllProduct(productRepository);

describe("Get all product test", () => {
  it("should return a list of productEntity", async () => {
    const fakeProductList: ProductEntity[] = [
      {
        id: 12,
        producerId: 13,
        price: 2000,
        unit: 20,
        name: "Caviar",
      },
      {
        id: 12,
        producerId: 13,
        price: 2000,
        unit: 20,
        name: "Caviar",
      },
      {
        id: 12,
        producerId: 13,
        price: 2000,
        unit: 20,
        name: "Caviar",
      },
    ];

    const resultExpected: Result<ProductEntity[], Error> = {
      status: "success",
      data: fakeProductList,
    };

    mockProductSource.getAll.mockResolvedValue(resultExpected);

    const result = await getAllProduct.execute();

    expect(result).toEqual(resultExpected);
  });

  it("should return failure result if error", async () => {
    const statusResult: Result<ProductEntity[], Error> = {
      status: "failure",
      error: new Error("Erreur"),
    };

    mockProductSource.getAll.mockResolvedValue(statusResult);

    const result = await getAllProduct.execute();

    expect(result).toEqual(statusResult);
  });
});
