export interface IBakeryService {
  create(order: string): Promise<string>;
}
