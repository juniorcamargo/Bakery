export class ReceiptService {
  public static print(input: MealReceiptInput) {
    const receiptItems = input.dishes.map(dish => `${dish.name}${dish.amount > 1 ? `(x${dish.amount})` : ''}`);

    if (input.error) {
      receiptItems.push('error');
    }

    return receiptItems.join(', ');
  }
}

export type MealReceiptInput = {
  dishes: { name: string; amount: number }[];
  error: boolean;
};
