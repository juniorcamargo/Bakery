import { beforeEach, describe, expect, test } from 'vitest';

import { IBakeryService } from '@/interfaces/bakery/IBakeryService';
import { BakeryService } from '@/services/BakeryService';

let bakeryService: IBakeryService;
describe('Bakery tests morning', () => {
  beforeEach(() => {
    bakeryService = new BakeryService();
  });

  test('Should create a order', async () => {
    const order = await bakeryService.create('morning, 1, 2, 3');
    expect(order).toBe('eggs, toast, coffee');
  });
  test('Should create a order with have seconds', async () => {
    const order = await bakeryService.create('morning, 1, 2, 3, 3');
    expect(order).toBe('eggs, toast, coffee(x2)');
  });
  test('Should create an order with options unordered', async () => {
    const order = await bakeryService.create('morning, 2, 1, 3');
    expect(order).toBe('eggs, toast, coffee');
  });
  test('Should create an order with error', async () => {
    const order = await bakeryService.create('morning, 1, 2, 3, 4');
    expect(order).toBe('eggs, toast, coffee, error');
  });
  test('Should create an order with error of have seconds', async () => {
    const order = await bakeryService.create('morning, 1, 2, 2, 3');
    expect(order).toBe('eggs, toast, error');
  });
});

describe('Bakery tests night', () => {
  beforeEach(() => {
    bakeryService = new BakeryService();
  });
  test('Should create an order with error', async () => {
    const order = await bakeryService.create('night, 1, 2, 3, 4');
    expect(order).toBe('steak, potato, wine, cake');
  });
  test('Should create a order with have seconds', async () => {
    const order = await bakeryService.create('night, 1, 2, 2, 3, 4');
    expect(order).toBe('steak, potato(x2), wine, cake');
  });
  test('Should create an order with options unordered', async () => {
    const order = await bakeryService.create('night, 2, 1, 3');
    expect(order).toBe('steak, potato, wine');
  });
  test('Should create an order with error', async () => {
    const order = await bakeryService.create('night, 1, 2, 3, 4, 5');
    expect(order).toBe('steak, potato, wine, cake, error');
  });
});
