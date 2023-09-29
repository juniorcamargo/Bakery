import axios, { HttpStatusCode } from 'axios';
import { describe, expect, test } from 'vitest';

describe('API tests', () => {
  test('Should check api health', async () => {
    const response = await axios.get('http://localhost:3033/');
    expect(response.status).toBe(HttpStatusCode.Ok);
    expect(response.data).toContain('Welcome');
  });
});
