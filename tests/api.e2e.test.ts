import supertest from 'supertest';
import { beforeAll, describe, expect, test } from 'vitest';

import BakeryController from '../src/controllers/BakeryController';
import { HomeController } from '../src/controllers/HomeController';
import { ExpressAdapter } from '../src/infra/http/ExpressAdapter';
import Http from '../src/infra/http/Http';
import { BakeryService } from '../src/services/BakeryService';

let http: Http;
describe('API tests', () => {
  beforeAll(() => {
    http = new ExpressAdapter();
    new HomeController(http);
    new BakeryController(http, new BakeryService(), '/bakery');
  });

  test('Should check api health', async () => {
    const response = await supertest(http.app).get('/');

    expect(response.status).toBe(200);
    expect(response.body).toContain('Welcome');
  });

  test('Should create an order via api', async () => {
    const input = {
      order: 'morning,1,2,3'
    };
    const response = await supertest(http.app).post('/bakery/order').send(input);

    expect(response.body).toBe('eggs, toast, coffee');
  });
});
