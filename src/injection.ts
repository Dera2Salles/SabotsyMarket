import { ProductRepositoryImp } from "./application/repository/ProductRepository";

import { GetAllProduct } from "./application/use-cases/Product/GetAllProduct";
import { GetOneProduct } from "./application/use-cases/Product/GetOneProduct";
import { InsertManyProduct } from "./application/use-cases/Product/InsertManyProduct";
import { ProductRemoteDataSource } from "./application/datasources/product_remote_data_source";
import axios from "axios";
import { AddProductToTheOrder } from "./application/use-cases/Order/addProductOrder";
import { OrderRepositoryImpl } from "./application/repository/OrderRepositoryImpl";
import { CreateAnOrder } from "./application/use-cases/Order/createAnOrder";
import { RemoveProductOrder } from "./application/use-cases/Order/removeProduct";
import { AuthServiceImpl } from "./application/auth_service";
import { LoginUseCase } from "./application/use-cases/User/login";
import { AuthRepositoryImpl } from "./application/repository/AuthRepository";
import { SendFile } from "./application/use-cases/Product/senFiles";

const api = axios.create({
  timeout: 5000,
});

const autService = new AuthServiceImpl(api);

const autRepository = new AuthRepositoryImpl(autService);

export const findUserUseCase = new LoginUseCase(autRepository);

// Database
const productServerSource = new ProductRemoteDataSource(api);

// Repositories
const productRepository = new ProductRepositoryImp(productServerSource);

const orderRepository = new OrderRepositoryImpl();

// Product Use Cases
export const getAllProductUseCase = new GetAllProduct(productRepository);
export const getOneProductUseCase = new GetOneProduct(productRepository);
export const insertManyProductUseCase = new InsertManyProduct(
  productRepository
);
export const sendFilesUseCase = new SendFile(productRepository);
export const addProductToTheOrderUseCase = new AddProductToTheOrder(
  orderRepository
);
export const createAnOrderUseCase = new CreateAnOrder(orderRepository);
export const removeProductOrderUseCase = new RemoveProductOrder(
  orderRepository
);

// export const findUserUseCase = new FindUserUseCase(userRepository);
