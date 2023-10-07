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

    const expected = [new OrderDish(new Eggs(), 1), new OrderDish(new Toast(), 1), new OrderDish(new Coffee(), 2)];

    expect(order.getMeal()).toHaveLength(3);
    expect(order.getMeal()).toStrictEqual(expected);
    expect(order.hasError()).toBeFalsy;
  });

  test('should create an order with error on invalid dish', () => {
    const order = new Order('1');
    order.addDish(new Eggs());
    order.addDish(new ErrorDishe());
    order.addDish(new Coffee());
    order.addDish(new Coffee());

    const expected = [new OrderDish(new Eggs(), 1)];

    expect(order.getMeal()).toHaveLength(1);
    expect(order.getMeal()).toStrictEqual(expected);
    expect(order.hasError()).toBeTruthy();
  });

  test('should create an order with error on non repeatable dish with seconds', () => {
    const order = new Order('1');
    order.addDish(new Eggs());
    order.addDish(new Toast());
    order.addDish(new Toast());
    order.addDish(new Coffee());

    const expected = [new OrderDish(new Eggs(), 1), new OrderDish(new Toast(), 1)];

    expect(order.getMeal()).toHaveLength(2);
    expect(order.getMeal()).toStrictEqual(expected);
    expect(order.hasError()).toBeTruthy();
  });
});
