import { OrderDish } from './OrderDish';

import { IDish } from '@/interfaces/bakery/IDish';
import { NonRepeatableDish } from '@/models/NonRepeatableDish';

export class Order {
  private dishes: OrderDish[] = [];
  private error = false;

  constructor(public readonly id: string) {}

  public addDish(dish: IDish) {
    const orderDish = this.dishes.find(orderDish => orderDish.dish.type === dish.type);
    if (!orderDish) {
      this.dishes.push(new OrderDish(dish, 1));
    } else {
      this.validateSecondsAccepted(orderDish.dish);
      orderDish.increment();
    }
  }

  public getMeal() {
    return this.dishes;
  }

  public hasError() {
    return this.error;
  }

  private validateSecondsAccepted(dish: IDish): void {
    if (dish instanceof NonRepeatableDish) {
      throw new Error('cannot have seconds');
    }
  }
}
