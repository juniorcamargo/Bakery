import { ErrorDishe } from './ErrorDishe';
import { OrderDish } from './OrderDish';

import { IDish } from '@/interfaces/bakery/IDish';
import { NonRepeatableDish } from '@/interfaces/bakery/NonRepeatableDish';

export class Order {
  private dishes: OrderDish[] = [];
  private error = false;

  constructor(public readonly id: string) {}

  public addDish(dish: IDish) {
    if (this.error) {
      return;
    }

    if (dish instanceof ErrorDishe) {
      this.error = true;
      return;
    }

    const dishIndex = this.dishes.findIndex((orderDish: OrderDish) => orderDish.dish.type === dish.type);
    if (dishIndex !== -1) {
      if (dish instanceof NonRepeatableDish) {
        this.error = true;
        return;
      }
      this.dishes[dishIndex].increment();
      return;
    }
    this.dishes.push(new OrderDish(dish, 1));
  }

  public getMeal() {
    return {
      error: this.error,
      dishes: this.dishes
    };
  }
}
