import { Order } from './Order';

import { IDishesFactory } from '@/interfaces/bakery/IDishesFactory';

export class Meal {
  public order: Order;

  constructor(public meal: string, public factory: IDishesFactory) {
    this.order = new Order('1');
  }

  public printOrder(): string {
    return;
  }

  public createOrder(options: string[]): MealOutput {
    options.sort();
    try {
      for (const option of options) {
        const dish = this.factory.create(option);
        this.order.addDish(dish);
      }
      return {
        dishes: this.order.getMeal().map(orderDish => ({
          name: orderDish.dish.name,
          amount: orderDish.getAmount()
        })),
        error: false
      };
    } catch (error) {
      return {
        dishes: this.order.getMeal().map(orderDish => ({
          name: orderDish.dish.name,
          amount: orderDish.getAmount()
        })),
        error: true
      };
    }
  }
}

export type MealOutput = {
  dishes: { name: string; amount: number }[];
  error: boolean;
};
