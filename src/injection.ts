import { ProductRepositoryImp } from "./product/application/ProductRepository";

import { GetAllProduct } from "./product/application/Product/GetAllProduct";
import { GetOneProduct } from "./product/application/Product/GetOneProduct";
import { InsertManyProduct } from "./product/application/Product/InsertManyProduct";
import { ProductRemoteDataSource } from "./product/application/data/product_remote_data_source";
import axios from "axios";
import { AddProductToTheOrder } from "./order/application/Order/addProductOrder";
import { OrderRepositoryImpl } from "./order/application/repository/OrderRepositoryImpl";
import { CreateAnOrder } from "./order/application/Order/createAnOrder";
import { RemoveProductOrder } from "./order/application/Order/removeProduct";
import { AuthServiceImpl } from "./auth/application/data/auth_service";
import { LoginUseCase } from "./auth/application/use_case/login";
import { SendFile } from "./product/application/Product/senFiles";
import { OrderRemoteDataSourceImpl } from "./order/application/data/order_server";
import { ConfirmOrderUseCase } from "./order/application/Order/confirm_order";
import { GetUserDataUseCase } from "./auth/application/use_case/get";
import { DeleteProductUseCase } from "./product/application/Product/delete";
import { AuthRepositoryImpl } from "./auth/application/repository/AuthRepository";

const api = axios.create({
  timeout: 5000,
  withCredentials: true,
});

const orderServiceServer = new OrderRemoteDataSourceImpl(api);

const autService = new AuthServiceImpl(api);

const autRepository = new AuthRepositoryImpl(autService);

export const loginUseCase = new LoginUseCase(autRepository);

// Database
const productServerSource = new ProductRemoteDataSource(api);

// Repositories
const productRepository = new ProductRepositoryImp(productServerSource);

const orderRepository = new OrderRepositoryImpl(orderServiceServer);

// Product Use Cases
export const getAllProductUseCase = new GetAllProduct(productRepository);
export const getOneProductUseCase = new GetOneProduct(productRepository);
export const insertManyProductUseCase = new InsertManyProduct(
  productRepository
);
export const confirmOrderUseCase = new ConfirmOrderUseCase(orderRepository);

export const sendFilesUseCase = new SendFile(productRepository);
export const addProductToTheOrderUseCase = new AddProductToTheOrder(
  orderRepository
);
export const createAnOrderUseCase = new CreateAnOrder(orderRepository);
export const removeProductOrderUseCase = new RemoveProductOrder(
  orderRepository
);

export const deleteProductUseCase = new DeleteProductUseCase(productRepository);

export const getUserDataUseCase = new GetUserDataUseCase(autRepository);

// export const findUserUseCase = new FindUserUseCase(userRepository);
