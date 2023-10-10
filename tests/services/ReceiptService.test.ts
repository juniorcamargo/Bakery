import { describe, expect, test } from 'vitest';

import { ReceiptService } from '@/services/ReceiptService';

describe('Receipt tests', () => {
  test('should print order receipt', () => {
    const input = {
      dishes: [
        { name: 'eggs', amount: 1 },
        { name: 'toast', amount: 1 },
        { name: 'coffee', amount: 2 }
      ],
      error: false
    };
    expect(ReceiptService.print(input)).toBe('eggs, toast, coffee(x2)');
  });

  test('should print order receipt with error', () => {
    const input = {
      dishes: [
        { name: 'eggs', amount: 1 },
        { name: 'toast', amount: 1 }
      ],
      error: true
    };
    expect(ReceiptService.print(input)).toBe('eggs, toast, error');
  });
});
