import { Order } from '@/models/Order';

export class ReceiptService {
  public static print(order: Order) {
    const dishes = order.getMeal();

    return dishes
      .map(orderDish => `${orderDish.dish.name}${orderDish.getAmount() > 1 ? `(x${orderDish.getAmount()})` : ''}`)
      .join(', ');
  }
}
