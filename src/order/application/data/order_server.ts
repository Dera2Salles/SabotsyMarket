import { ApiSource } from '@/core/constant';
import type { OrderEntity } from '@/order/domain/Entities/Order';
import { type AxiosInstance } from 'axios';

export abstract class OrderServerSource {
  abstract confirm(order: OrderEntity): Promise<void>;
}

export class OrderRemoteDataSourceImpl implements OrderServerSource {
  constructor(private api: AxiosInstance) {}

  async confirm(order: OrderEntity): Promise<void> {
    try {
      const response = await this.api.post(`${ApiSource.local}/order`, order);
      if (response.status != 200) throw new Error();
    } catch (error) {
      console.error(error);
      throw new Error();
    }
  }
}
