import { beforeEach, describe, expect, test } from 'vitest';

import { MorningDishesFactory } from '@/models/factories/MorningDishesFactory';
import { Meal } from '@/models/Meal';

let meal: Meal;
describe('Bakery tests morning', () => {
  beforeEach(() => {
    meal = new Meal('morning', new MorningDishesFactory());
  });

  test('Should create a order', async () => {
    const createOrder = meal.createOrder(['1', '2', '3']);
    expect(createOrder).toBe('eggs, toast, coffee');
  });
  test('Should create a order with have seconds', async () => {
    const createOrder = meal.createOrder(['1', '2', '3', '3']);
    expect(createOrder).toBe('eggs, toast, coffee(x2)');
  });
  test('Should create an order with options unordered', async () => {
    const createOrder = meal.createOrder(['2', '1', '3']);
    expect(createOrder).toBe('eggs, toast, coffee');
  });
  test('Should create an order with error', async () => {
    const createOrder = meal.createOrder(['1', '2', '3', '4']);
    expect(createOrder).toBe('eggs, toast, coffee, error');
  });
  test('Should create an order with error of have seconds', async () => {
    const createOrder = meal.createOrder(['1', '2', '2', '3']);
    expect(createOrder).toBe('eggs, toast, error');
  });

  test.skip('Should marcelo', async () => {
    const createOrder = meal.createOrder(['3', '3', '1', '2']);
    expect(createOrder).toBe('eggs, toast, coffee(x2)');
  });

  test.skip('Should marcelo 2', async () => {
    const createOrder = meal.createOrder(['3', '5', '3', '1']);
    expect(createOrder).toBe('eggs, coffee(x2), error');
  });
});
