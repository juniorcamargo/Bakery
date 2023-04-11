import { describe, expect, test } from 'vitest';

import { NightMeal } from '../../src/models/NightMeal';

describe('Bakery tests night', () => {
  test('Should create an order with error', async () => {
    const meal = new NightMeal();
    const createOrder = meal.createOrder(['1', '2', '3', '4']);
    expect(createOrder).toBe('steak, potato, wine, cake');
  });
  test('Should create a order with have seconds', async () => {
    const meal = new NightMeal();
    const createOrder = meal.createOrder(['1', '2', '2', '3', '4']);
    expect(createOrder).toBe('steak, potato(2x), wine, cake');
  });
  test('Should create an order with options unordered', async () => {
    const meal = new NightMeal();
    const createOrder = meal.createOrder(['2', '1', '3']);
    expect(createOrder).toBe('steak, potato, wine');
  });
  test('Should create an order with error', async () => {
    const meal = new NightMeal();
    const createOrder = meal.createOrder(['1', '2', '3', '4', '5']);
    expect(createOrder).toBe('steak, potato, wine, cake, error');
  });
});
