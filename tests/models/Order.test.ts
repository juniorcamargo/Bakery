import { describe, expect, test } from 'vitest';

import { ErrorDishe } from '@/models/ErrorDishe';
import { Coffee } from '@/models/morning/dishes/Coffee';
import { Eggs } from '@/models/morning/dishes/Eggs';
import { Toast } from '@/models/morning/dishes/Toast';
import { Order } from '@/models/Order';
import { OrderDish } from '@/models/OrderDish';

describe('Order tests', () => {
  test('should create an order', () => {
    const order = new Order('1');
    order.addDish(new Eggs());
    order.addDish(new Toast());
    order.addDish(new Coffee());
    order.addDish(new Coffee());

    const expected = {
      error: false,
      dishes: [new OrderDish(new Eggs(), 1), new OrderDish(new Toast(), 1), new OrderDish(new Coffee(), 2)]
    };

    expect(order.getMeal().dishes).toHaveLength(3);
    expect(order.getMeal()).toStrictEqual(expected);
  });

  test('should create an order with invalid dish', () => {
    const order = new Order('1');
    order.addDish(new Eggs());
    order.addDish(new ErrorDishe());
    order.addDish(new Coffee());
    order.addDish(new Coffee());

    const expected = {
      error: true,
      dishes: [new OrderDish(new Eggs(), 1)]
    };

    expect(order.getMeal().dishes).toHaveLength(1);
    expect(order.getMeal()).toStrictEqual(expected);
  });
});
