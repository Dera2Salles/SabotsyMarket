import type { OrderEntity } from "../Entities/Order";
import type { ProductEntity } from "../Entities/Product";
import type { RESULT } from "../Types";
import { type Result, success, failure } from "../Types/Result";

export class OrderModel {
  private order: OrderEntity | null = null;

  createOrder(): void {
    this.order = {
      status: "Pending",
      OrderItems: [],
      OrderItemsTotalPrice: 0,
    };
  }

  private async calculateTotal(): Promise<Result<void, Error>> {
    if (!this.order) {
      return failure(new Error("Order not initialized"));
    }
    this.order.OrderItemsTotalPrice = this.order.OrderItems.reduce(
      (total, item) => total + item.price * item.unitOnCart,
      0
    );
    return success(undefined);
  }

  async addProductToTheOrder(
    productToAdd: ProductEntity
  ): Promise<Result<void, Error>> {
    if (!this.order) {
      return failure(new Error("Order not initialized"));
    }

    const isProductOnCart = this.order.OrderItems.findIndex(
      (item) => item.name == productToAdd.name
    );

    if (isProductOnCart !== -1) {
      this.order.OrderItems[isProductOnCart].unitOnCart += 1;
      await this.calculateTotal();
      return success(undefined);
    }
    productToAdd.unitOnCart = 1;
    this.order.OrderItems.push(productToAdd);

    await this.calculateTotal();
    return success(undefined);
  }

  async decreaseProductUnitOnOrder(
    product: ProductEntity
  ): Promise<Result<void, Error>> {
    if (!this.order) {
      return failure(new Error("Order not initialized"));
    }

    const isProductOnCart = this.order.OrderItems.findIndex(
      (item) => item.name == product.name
    );

    if (isProductOnCart !== -1) {
      let productUnitOnOrder =
        this.order.OrderItems[isProductOnCart].unitOnCart;

      if (productUnitOnOrder != 0) productUnitOnOrder -= 1;

      await this.calculateTotal();

      return success(undefined);
    }
    product.unitOnCart = 1;
    this.order.OrderItems.push(product);

    await this.calculateTotal();
    return success(undefined);
  }

  async removeProductToTheOrder(
    productId: number
  ): Promise<Result<void, Error>> {
    if (!this.order) {
      return failure(new Error("Order not initialized"));
    }
    const initialLength = this.order.OrderItems.length;
    this.order.OrderItems = this.order.OrderItems.filter(
      (item) => item.id !== productId
    );

    if (this.order.OrderItems.length === initialLength) {
      return failure(new Error("Product not found in order"));
    }

    await this.calculateTotal();
    return success(undefined);
  }

  getData(): RESULT<OrderEntity, Error> {
    if (!this.order) {
      return failure(new Error("Order not initialized"));
    }
    return success({
      ...this.order,
      OrderItemsTotalPrice: this.order.OrderItemsTotalPrice,
    });
  }

  verifyIsPlaced = (): RESULT<void, Error> => {
    const isOrderCreated = this.order;
    if (!isOrderCreated) return failure(new Error("Order not initialized"));
    return success(undefined);
  };
}
