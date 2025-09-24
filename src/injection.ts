import { ProductRepositoryImp } from './features/product/ProductRepositoryImpl';
import { AuthRepositoryImpl } from './features/auth/AuthRepositoryImpl';
import { MemoryStorage } from './features/product/productMemoryStorage';

import axios from 'axios';
import { OrderRemoteDataSourceImpl } from './features/order/OrderServerSource';
import { AuthServiceImpl } from './features/auth/AuthService';
import { OrderRepositoryImpl } from './features/order/OrderRepositoryImpl';

const api = axios.create({
  timeout: 5000,
  withCredentials: true,
});

const orderServiceServer = new OrderRemoteDataSourceImpl(api);

const autService = new AuthServiceImpl(api);

export const autRepository = new AuthRepositoryImpl(autService);

const produdctInMemory = new MemoryStorage();
// Repositories
export const productRepository = new ProductRepositoryImp(produdctInMemory);

export const orderRepository = new OrderRepositoryImpl(orderServiceServer);

// Product
