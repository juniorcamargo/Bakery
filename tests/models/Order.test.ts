import { describe, expect, test } from 'vitest';

import { Coffee } from '@/models/morning/dishes/Coffee';
import { Eggs } from '@/models/morning/dishes/Eggs';
import { Toast } from '@/models/morning/dishes/Toast';

describe('Order tests', () => {
  test('should create an order', () => {
    const order = new Order('1');
    order.addDish(new Eggs());
    order.addDish(new Toast());
    order.addDish(new Coffee());
    order.addDish(new Coffee());

    const expected = [
      { type: 'drink', name: 'coffee', amount: 2 },
      { type: 'entrée', name: 'eggs', amount: 1 },
      { type: 'side', name: 'toast', amount: 1 }
    ];

    expect(order.getMeal()).toHaveLength(3);
    expect(order.getMeal()).toEqual(expected);
  });
});
