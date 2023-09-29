import axios, { HttpStatusCode } from 'axios';
import { describe, expect, test } from 'vitest';

describe('API tests', () => {
  test('Should check api health', async () => {
    const response = await axios.get('http://localhost:3033/');
    expect(response.status).toBe(HttpStatusCode.Ok);
    expect(response.data).toContain('Welcome');
  });

  test('Should create an order via api', async () => {
    const input = {
      order: 'morning,1,2,3'
    };
    const response = await axios.post('http://localhost:3033/bakery/order', input);
    expect(response.data).toBe('eggs, toast, coffee');
  });
});
