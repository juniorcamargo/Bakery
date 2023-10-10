import { beforeEach, describe, expect, test } from 'vitest';

import { NightDishesFactory } from '@/models/factories/NightDishesFactory';
import { Meal } from '@/models/Meal';

let meal: Meal;
describe('Bakery tests night', () => {
  beforeEach(() => {
    meal = new Meal('night', new NightDishesFactory());
  });
  test('Should create an order with error', async () => {
    const expected = {
      dishes: [
        { name: 'steak', amount: 1 },
        { name: 'potato', amount: 1 },
        { name: 'wine', amount: 1 },
        { name: 'cake', amount: 1 }
      ],
      error: false
    };
    const createOrder = meal.createOrder(['1', '2', '3', '4']);
    expect(createOrder).toEqual(expected);
  });
  test('Should create a order with have seconds', async () => {
    const expected = {
      dishes: [
        { name: 'steak', amount: 1 },
        { name: 'potato', amount: 2 },
        { name: 'wine', amount: 1 },
        { name: 'cake', amount: 1 }
      ],
      error: false
    };
    const createOrder = meal.createOrder(['1', '2', '2', '3', '4']);
    expect(createOrder).toEqual(expected);
  });
  test('Should create an order with options unordered', async () => {
    const expected = {
      dishes: [
        { name: 'steak', amount: 1 },
        { name: 'potato', amount: 1 },
        { name: 'wine', amount: 1 }
      ],
      error: false
    };
    const createOrder = meal.createOrder(['2', '1', '3']);
    expect(createOrder).toEqual(expected);
  });
  test('Should create an order with error', async () => {
    const expected = {
      dishes: [
        { name: 'steak', amount: 1 },
        { name: 'potato', amount: 1 },
        { name: 'wine', amount: 1 },
        { name: 'cake', amount: 1 }
      ],
      error: true
    };
    const createOrder = meal.createOrder(['1', '2', '3', '4', '5']);
    expect(createOrder).toEqual(expected);
  });
});
