import type { ProductEntity } from '@/features/product/ProductEntity';
import type {
  addProductDto,
  InsertReturnType,
  ProductServerSource,
} from './ProductRemoteDataSource';

import apple from '@/assets/apple.jpg';
import banana from '@/assets/banana.jpg';
import ognion from '@/assets/ognion.jpg';
import tomate from '@/assets/tomate.jpg';
import chouFleur from '@/assets/chouFleur.jpg';

export class MemoryStorage implements ProductServerSource {
  private product: ProductEntity[] = [
    {
      id: '1',
      producerId: '1',
      price: 3000,
      unit: 40,
      name: 'Tomate',
      category: 'legume',
      description: 'Fraîches et bonnes pour la santé',
      fileName: tomate,
    },
    {
      id: '2',
      producerId: '3',
      price: 2500,
      unit: 25,
      name: 'Pomme',
      category: 'fruit',
      description: 'Pommes croquantes de saison',
      fileName: apple,
    },
    {
      id: '3',
      producerId: '2',
      price: 1500,
      unit: 60,
      name: 'Ognion',
      category: 'legume',
      description: 'Ognion biologiques riches en vitamines',
      fileName: ognion,
    },
    {
      id: '4',
      producerId: '4',
      price: 4500,
      unit: 15,
      name: 'Banana',
      category: 'fruit',
      description: 'Banana crémeux et mûrs à point',
      fileName: banana,
    },
    {
      id: '5',
      producerId: '5',
      price: 4500,
      unit: 15,
      name: 'Chou Fleur',
      category: 'legume',
      description: 'Chou fleur à point',
      fileName: chouFleur,
    },
  ]; // Fake Data

  async getOneByName(data: addProductDto): Promise<ProductEntity> {}

  async add(product: ProductEntity[]): Promise<InsertReturnType[]> {}

  async getAll(page: number, limit: number): Promise<ProductEntity[]> {
    const product = this.product.map((productItem) => productItem);
    if (!product) throw new Error('Database error');
    return product;
  }
  async delete(productId: string): Promise<void> {}

  async update(_product: ProductEntity): Promise<void> {}

  async sendFiles(file: FormData): Promise<void> {}
}
