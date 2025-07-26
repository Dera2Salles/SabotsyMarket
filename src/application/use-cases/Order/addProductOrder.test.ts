import { mockOrderSource } from "../../../test/mockedProductSource";

import { AddProductToTheOrder } from "./addProductOrder";
import { OrderRepositoryImpl } from "../../repository/OrderRepositoryImpl";

import type { Result } from "../../../domain/Types/Result";
import type { ProductEntity } from "../../../domain/Entities/Product";
import type { OrderEntity } from "../../../domain/Entities/Order";
import { CreateAnOrder } from "./createAnOrder";

const repository: OrderRepositoryImpl = new OrderRepositoryImpl(
  mockOrderSource
);

const createAnOrder: CreateAnOrder = new CreateAnOrder(repository);

const addProductToTheOrder: AddProductToTheOrder = new AddProductToTheOrder(
  repository
);

describe("Order Use case test", () => {
  it("should return succes undefined ", async () => {
    const productToAdd: ProductEntity = {
      id: 1,
      name: "katsaka",
      price: 3000,
      producerId: 3,
      unit: 3,
    };

    const orderReturned: OrderEntity = {
      consumerId: 2,
      OrderItems: [productToAdd, productToAdd],
      OrderItemsTotalPrice: 6000,
      status: "Pending",
    };
    const succesStatusResult: Result<OrderEntity, Error> = {
      status: "success",
      data: orderReturned,
    };

    await createAnOrder.execute(2);
    await addProductToTheOrder.execute(productToAdd);
    const result = await addProductToTheOrder.execute(productToAdd);
    expect(result).toEqual(succesStatusResult);
  });
});
