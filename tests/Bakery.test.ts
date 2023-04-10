import { describe, expect, test } from 'vitest';

import { MorningMeal } from '../src/models/MorningMeal';
import { NightMeal } from '../src/models/NightMeal';

describe('Bakery tests morning', () => {
  test('Should create a order', async () => {
    const meal = new MorningMeal();
    const createOrder = meal.createOrder(['1', '2', '3']);
    expect(createOrder).toBe('eggs, toast, coffee');
  });
  test('Should create a order with have seconds', async () => {
    const meal = new MorningMeal();
    const createOrder = meal.createOrder(['1', '2', '3', '3']);
    expect(createOrder).toBe('eggs, toast, coffee(2x)');
  });
  test('Should create an order with options unordered', async () => {
    const meal = new MorningMeal();
    const createOrder = meal.createOrder(['2', '1', '3']);
    expect(createOrder).toBe('eggs, toast, coffee');
  });
  test('Should create an order with error', async () => {
    const meal = new MorningMeal();
    const createOrder = meal.createOrder(['1', '2', '3', '4']);
    expect(createOrder).toBe('eggs, toast, coffee, error');
  });
  test('Should create an order with error of have seconds', async () => {
    const meal = new MorningMeal();
    const createOrder = meal.createOrder(['1', '2', '2', '3']);
    expect(createOrder).toBe('eggs, toast, error');
  });

  test('Should marcelo', async () => {
    const meal = new MorningMeal();
    const createOrder = meal.createOrder(['3', '3', '1', '2']);
    expect(createOrder).toBe('eggs, toast, coffee(2x)');
  });

  test('Should marcelo 2', async () => {
    const meal = new MorningMeal();
    const createOrder = meal.createOrder(['3', '5', '3', '1']);
    expect(createOrder).toBe('eggs, coffee(2x), error');
  });
});

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
