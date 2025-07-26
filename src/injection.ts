
import { MemoryStorage } from "./application/database/MemorySource";
import { OrderRepositoryImpl } from "./application/repository/OrderRepositoryImpl";
import { ProductRepositoryImp } from "./application/repository/ProductRepository";
import { AddProductToTheOrder } from "./application/use-cases/Order/addProductOrder";
import { CreateAnOrder } from "./application/use-cases/Order/createAnOrder";
import { RemoveProductOrder } from "./application/use-cases/Order/removeProduct";
import { GetAllProduct } from "./application/use-cases/Product/GetAllProduct";
import { GetOneProduct } from "./application/use-cases/Product/GetOneProduct";
import { InsertManyProduct } from "./application/use-cases/Product/InsertManyProduct";
import { InsertOneProduct } from "./application/use-cases/Product/insertOneProduct";

// Database
const memoryStorage = new MemoryStorage();

// Repositories
const productRepository = new ProductRepositoryImp(memoryStorage);
const orderRepository = new OrderRepositoryImpl(memoryStorage);

// Product Use Cases
export const getAllProductUseCase = new GetAllProduct(productRepository);
export const getOneProductUseCase = new GetOneProduct(productRepository);
export const insertManyProductUseCase = new InsertManyProduct(productRepository);
export const insertOneProductUseCase = new InsertOneProduct(productRepository);

// Order Use Cases
export const addProductToTheOrderUseCase = new AddProductToTheOrder(orderRepository);
export const createAnOrderUseCase = new CreateAnOrder(orderRepository);
export const removeProductOrderUseCase = new RemoveProductOrder(orderRepository);
