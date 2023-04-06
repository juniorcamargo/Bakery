import { describe, expect, test } from 'vitest';

import { MorningMeal } from '../src/models/MorningMeal';

describe('Bakery tests', () => {
  test('Should create a order', async () => {
    const meal = new MorningMeal();
    const createOrder = meal.createOrder(['1', '2', '3']);
    console.log(createOrder);
    expect(createOrder).toBe('morning, eggs, toast, coffee');
  });

  test('Should create a order with have seconds', async () => {
    const meal = new MorningMeal();
    const createOrder = meal.createOrder(['1', '2', '3', '3']);
    console.log(createOrder);
    expect(createOrder).toBe('morning, eggs, toast, coffee(2x)');
  });

  test('Should create an order with options unordered', async () => {
    const meal = new MorningMeal();
    const createOrder = meal.createOrder(['2', '1', '3']);
    console.log(createOrder);
    expect(createOrder).toBe('morning, eggs, toast, coffee');
  });

  test('Should create an order with error', async () => {
    const meal = new MorningMeal();
    const createOrder = meal.createOrder(['1', '2', '3', '4']);
    console.log(createOrder);
    expect(createOrder).toBe('morning, eggs, toast, coffee, error');
  });

  test('Should create an order with error', async () => {
    const meal = new MorningMeal();
    const createOrder = meal.createOrder(['1', '2', '2', '3']);
    console.log(createOrder);
    expect(createOrder).toBe('morning, eggs, toast, coffee');
  });
});
