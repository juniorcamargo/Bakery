import { IDish } from '@/interfaces/bakery/IDish';

export class OrderDish {
  constructor(public readonly dish: IDish, private amount: number) {}

  public increment() {
    this.amount += 1;
  }

  public getAmount(): number {
    return this.amount;
  }
}
