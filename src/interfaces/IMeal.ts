export interface IMeal {
  meal: string;
  order: string;
  printOrder(): string;
  createOrder(options: string[]): string;
  removeRepeatedOccurrences(option: string, options: string[]): string[];
}
