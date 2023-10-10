import { beforeEach, describe, expect, test } from 'vitest';

import { MorningDishesFactory } from '@/models/factories/MorningDishesFactory';
import { Meal } from '@/models/Meal';

let meal: Meal;
describe('Bakery tests morning', () => {
  beforeEach(() => {
    meal = new Meal('morning', new MorningDishesFactory());
  });

  test('Should create a order', async () => {
    const expected = {
      dishes: [
        { name: 'eggs', amount: 1 },
        { name: 'toast', amount: 1 },
        { name: 'coffee', amount: 1 }
      ],
      error: false
    };
    const createOrder = meal.createOrder(['1', '2', '3']);
    expect(createOrder).toEqual(expected);
  });
  test('Should create a order with have seconds', async () => {
    const expected = {
      dishes: [
        { name: 'eggs', amount: 1 },
        { name: 'toast', amount: 1 },
        { name: 'coffee', amount: 2 }
      ],
      error: false
    };
    const createOrder = meal.createOrder(['1', '2', '3', '3']);
    expect(createOrder).toEqual(expected);
  });
  test('Should create an order with options unordered', async () => {
    const expected = {
      dishes: [
        { name: 'eggs', amount: 1 },
        { name: 'toast', amount: 1 },
        { name: 'coffee', amount: 1 }
      ],
      error: false
    };
    const createOrder = meal.createOrder(['2', '1', '3']);
    expect(createOrder).toEqual(expected);
  });
  test('Should create an order with error', async () => {
    const expected = {
      dishes: [
        { name: 'eggs', amount: 1 },
        { name: 'toast', amount: 1 },
        { name: 'coffee', amount: 1 }
      ],
      error: true
    };
    const createOrder = meal.createOrder(['1', '2', '3', '4']);
    expect(createOrder).toEqual(expected);
  });
  test('Should create an order with error of have seconds', async () => {
    const expected = {
      dishes: [
        { name: 'eggs', amount: 1 },
        { name: 'toast', amount: 1 }
      ],
      error: true
    };
    const createOrder = meal.createOrder(['1', '2', '2', '3']);
    expect(createOrder).toEqual(expected);
  });
});
