import type { ProductEntity } from "../../domain/Entity/Product";
import { ProductOutOfStockException } from "../../../core/Exceptions";

export class ProductModel {
  private product: ProductEntity;

  constructor(product: ProductEntity) {
    this.product = product;
  }

  increaseUnit(unit: number) {
    this.product.unit += unit;
  }

  decreaseUnit(unit: number) {
    if (this.product.unit < unit) throw new ProductOutOfStockException();
    this.product.unit -= unit;
  }

  update(productUpdate: ProductEntity) {
    if (
      productUpdate.price != null ||
      productUpdate.unit != null ||
      productUpdate.name != null
    ) {
      this.product.price = productUpdate.price;
      this.product.unit = productUpdate.unit;
      this.product.name = productUpdate.name;
    }
  }

  snapshot(): ProductEntity {
    return {
      id: this.product.id,
      producerId: this.product.producerId,
      price: this.product.price,
      unit: this.product.unit,
      unitOnCart: this.product.unitOnCart,
      name: this.product.name,
      category: this.product.category,
      filename: this.product.filename,
      description: this.product.description,
    };
  }
}
