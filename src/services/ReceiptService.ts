import { Order } from '@/models/Order';

export class ReceiptService {
  public static print(order: Order) {
    const dishes = order.getMeal();

    const receiptItems = dishes.map(
      orderDish => `${orderDish.dish.name}${orderDish.getAmount() > 1 ? `(x${orderDish.getAmount()})` : ''}`
    );

    if (order.hasError()) {
      receiptItems.push('error');
    }

    return receiptItems.join(', ');
  }
}
