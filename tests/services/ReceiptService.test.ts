import { describe, expect, test } from 'vitest';

import { Coffee } from '@/models/morning/dishes/Coffee';
import { Eggs } from '@/models/morning/dishes/Eggs';
import { Toast } from '@/models/morning/dishes/Toast';
import { Order } from '@/models/Order';

describe('Receipt tests', () => {
  test('should print order receipt', () => {
    const order = new Order('1');
    order.addDish(new Eggs());
    order.addDish(new Toast());
    order.addDish(new Coffee());
    order.addDish(new Coffee());

    expect(ReceiptService.print(order)).toBe('eggs, toast, coffee(x2)');
  });
});
