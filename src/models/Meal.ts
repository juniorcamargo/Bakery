import { Order } from './Order';

import { IDishesFactory } from '@/interfaces/bakery/IDishesFactory';
import { ReceiptService } from '@/services/ReceiptService';

export class Meal {
  public order: Order;

  constructor(public meal: string, public factory: IDishesFactory) {
    this.order = new Order('1');
  }

  public printOrder(): string {
    return ReceiptService.print(this.order);
  }

  public createOrder(options: string[]): string {
    options.sort();
    options.forEach(option => {
      const dish = this.factory.create(option);
      this.order.addDish(dish);
    });
    return this.printOrder();
  }
}
