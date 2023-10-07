import { beforeEach, describe, expect, test } from 'vitest';

import { NightDishesFactory } from '@/models/factories/NightDishesFactory';
import { Meal } from '@/models/Meal';

let meal: Meal;
describe('Bakery tests night', () => {
  beforeEach(() => {
    meal = new Meal('night', new NightDishesFactory());
  });
  test('Should create an order with error', async () => {
    const createOrder = meal.createOrder(['1', '2', '3', '4']);
    expect(createOrder).toBe('steak, potato, wine, cake');
  });
  test('Should create a order with have seconds', async () => {
    const createOrder = meal.createOrder(['1', '2', '2', '3', '4']);
    expect(createOrder).toBe('steak, potato(x2), wine, cake');
  });
  test('Should create an order with options unordered', async () => {
    const createOrder = meal.createOrder(['2', '1', '3']);
    expect(createOrder).toBe('steak, potato, wine');
  });
  test('Should create an order with error', async () => {
    const createOrder = meal.createOrder(['1', '2', '3', '4', '5']);
    expect(createOrder).toBe('steak, potato, wine, cake, error');
  });
});
