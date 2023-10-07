import { ErrorDishe } from './ErrorDishe';
import { OrderDish } from './OrderDish';

import { IDish } from '@/interfaces/bakery/IDish';
import { NonRepeatableDish } from '@/models/NonRepeatableDish';

export class Order {
  private dishes: OrderDish[] = [];
  private error = false;

  constructor(public readonly id: string) {}

  public addDish(dish: IDish) {
    this.validateDish(dish);

    if (this.hasError()) {
      return;
    }

    const orderDish = this.dishes.find(orderDish => orderDish.dish.type === dish.type);
    if (!orderDish) {
      this.dishes.push(new OrderDish(dish, 1));
    } else {
      if (this.validateSecondsAccepted(orderDish.dish)) {
        orderDish.increment();
      }
    }
  }

  public getMeal() {
    return this.dishes;
  }

  public hasError() {
    return this.error;
  }

  private validateDish(dish: IDish) {
    if (dish instanceof ErrorDishe) {
      this.error = true;
    }
  }

  private validateSecondsAccepted(dish: IDish): boolean {
    if (dish instanceof NonRepeatableDish) {
      this.error = true;
      return false;
    }
    return true;
  }
}
