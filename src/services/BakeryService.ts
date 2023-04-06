import { IBakeryService } from '@/interfaces/bakery/IBakeryService';

export class BakeryService implements IBakeryService {
  public async create(order: string): Promise<string> {
    return Promise.resolve(order);
  }
}

export default new BakeryService();
