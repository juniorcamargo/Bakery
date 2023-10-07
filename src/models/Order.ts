import { OrderDish } from './OrderDish';

import { IDish } from '@/interfaces/bakery/IDish';

export class Order {
  private dishes: OrderDish[] = [];
  private error = false;

  constructor(public readonly id: string) {}

  public addDish(dish: IDish) {
    const dishIndex = this.dishes.findIndex((orderDish: OrderDish) => orderDish.dish.type === dish.type);
    if (dishIndex !== -1) {
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
