import { Notification } from './Notification';
import { OrderDish } from './OrderDish';

import NotificationError from '@/errors/NotificationError';
import { IDish } from '@/interfaces/bakery/IDish';
import { INotification } from '@/interfaces/INotification';
import { NonRepeatableDish } from '@/models/NonRepeatableDish';

export class Order {
  public readonly notification: INotification;
  private dishes: OrderDish[] = [];

  constructor(public readonly id: string) {
    this.notification = new Notification();
  }

  public addDish(dish: IDish) {
    const orderDish = this.dishes.find(orderDish => orderDish.dish.type === dish.type);
    if (orderDish) {
      this.validateSecondsAccepted(orderDish.dish);
      this.validate();
      orderDish.increment();
    } else {
      this.dishes.push(new OrderDish(dish, 1));
    }
  }

  public getMeal() {
    return this.dishes;
  }

  private validate() {
    if (this.notification.hasErrors()) {
      throw new NotificationError(this.notification.getErrors());
    }
  }

  private validateSecondsAccepted(dish: IDish): void {
    if (dish instanceof NonRepeatableDish) {
      this.notification.addError({ context: dish.name, message: 'cannot have seconds' });
    }
  }
}
