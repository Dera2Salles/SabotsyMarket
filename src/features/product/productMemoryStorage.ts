import type { ProductEntity } from '@/features/product/ProductEntity';
import type {
  addProductDto,
  InsertReturnType,
  ProductServerSource,
} from './product_remote_data_source';

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
    },
    {
      id: '2',
      producerId: '3',
      price: 2500,
      unit: 25,
      name: 'Pomme',
      category: 'fruit',
      description: 'Pommes croquantes de saison',
    },
    {
      id: '3',
      producerId: '2',
      price: 1500,
      unit: 60,
      name: 'Carotte',
      category: 'legume',
      description: 'Carottes biologiques riches en vitamines',
    },
    {
      id: '4',
      producerId: '4',
      price: 4500,
      unit: 15,
      name: 'Avocat',
      category: 'fruit',
      description: 'Avocats crémeux et mûrs à point',
    },
    {
      id: '5',
      producerId: '1',
      price: 1200,
      unit: 80,
      name: 'Oignon',
      category: 'legume',
      description: 'Oignons jaunes parfaits pour la cuisine',
    },
    {
      id: '6',
      producerId: '5',
      price: 3500,
      unit: 30,
      name: 'Poivron',
      category: 'legume',
      description: 'Poivrons colorés et sucrés',
    },
    {
      id: '7',
      producerId: '3',
      price: 2800,
      unit: 20,
      name: 'Banane',
      category: 'fruit',
      description: 'Bananes issues du commerce équitable',
    },
    {
      id: '8',
      producerId: '2',
      price: 1800,
      unit: 50,
      name: 'Salade',
      category: 'legume',
      description: 'Laitue fraîche et croquante',
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
