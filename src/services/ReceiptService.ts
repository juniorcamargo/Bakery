import { Order } from '@/models/Order';

export class ReceiptService {
  public static print(order: Order, hasError = false) {
    const dishes = order.getMeal();

    const receiptItems = dishes.map(
      orderDish => `${orderDish.dish.name}${orderDish.getAmount() > 1 ? `(x${orderDish.getAmount()})` : ''}`
    );

    if (hasError) {
      receiptItems.push('error');
    }

    return receiptItems.join(', ');
  }
}
