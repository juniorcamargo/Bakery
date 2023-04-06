export interface IMeal {
  meal: string;
  order: string;
  printOrder(): string;
  createOrder(options: string[]): string;
}
