import type { OrderEntity } from '../../domain/Entities/Order';
import type { ProductEntity } from '../../../product/domain/Entity/Product';
import type { RESULT } from '../../../core/Types';
import { type Result, success, failure } from '../../../core/Types/Result';

export class OrderModel {
  private order: OrderEntity | null = null;

  createOrder(): void {
    this.order = {
      status: 'Placed',
      OrderItems: [],
      OrderItemsTotalPrice: 0,
      OrderTotalItemUnit: 0,
    };
  }

  calculateTotalItemUnit(): Result<void, Error> {
    if (!this.order) {
      return failure(new Error('Order not initialized'));
    }

    this.order.OrderTotalItemUnit = this.order.OrderItems.reduce(
      (total, item) => total + (item.unitOnCart as number),
      0,
    );
    return success(undefined);
  }

  private async calculateTotal(): Promise<Result<void, Error>> {
    if (!this.order) {
      return failure(new Error('Order not initialized'));
    }
    this.order.OrderItemsTotalPrice = this.order.OrderItems.reduce(
      (total, item) => total + item.price * (item.unitOnCart as number),
      0,
    );
    return success(undefined);
  }

  async addProductToTheOrder(
    productToAdd: ProductEntity,
  ): Promise<Result<void, Error>> {
    if (!this.order) {
      return failure(new Error('Order not initialized'));
    }

    const isProductOnCart = this.order.OrderItems.findIndex(
      (item) => item.name == productToAdd.name,
    );

    if (isProductOnCart !== -1) {
      if (this.order.OrderItems[isProductOnCart]?.unitOnCart)
        this.order.OrderItems[isProductOnCart].unitOnCart += 1;
    } else {
      productToAdd.unitOnCart = 1;
      this.order.OrderItems.push(productToAdd);
    }

    this.calculateTotalItemUnit();
    await this.calculateTotal();
    return success(undefined);
  }

  async decreaseProductUnitOnOrder(
    product: ProductEntity,
  ): Promise<Result<void, Error>> {
    if (!this.order) {
      return failure(new Error('Order not initialized'));
    }

    const isProductOnCart = this.order.OrderItems.findIndex(
      (item) => item.id == product.id,
    );

    if (isProductOnCart !== -1) {
      const productUnitOnOrder =
        this.order.OrderItems[isProductOnCart].unitOnCart;
      if (productUnitOnOrder != 1) {
        if (this.order.OrderItems[isProductOnCart]?.unitOnCart)
          this.order.OrderItems[isProductOnCart].unitOnCart -= 1;
      } else {
        this.removeProductToTheOrder(product?.id as string);
      }

      this.calculateTotalItemUnit();
      await this.calculateTotal();

      return success(undefined);
    }
    return failure(Error());
  }

  async removeProductToTheOrder(
    productId: string,
  ): Promise<Result<void, Error>> {
    if (!this.order) {
      return failure(new Error('Order not initialized'));
    }
    const initialLength = this.order.OrderItems.length;
    this.order.OrderItems = this.order.OrderItems.filter(
      (item) => item.id !== productId,
    );

    if (this.order.OrderItems.length === initialLength) {
      return failure(new Error('Product not found in order'));
    }

    await this.calculateTotal();
    return success(undefined);
  }

  getData(): OrderEntity {
    if (!this.order) {
      throw new Error('Order not initialized');
    }
    return {
      ...this.order,
    };
  }

  verifyIsPlaced = (): RESULT<void, Error> => {
    const isOrderCreated = this.order;
    if (!isOrderCreated) return failure(new Error('Order not initialized'));
    return success(undefined);
  };
}
