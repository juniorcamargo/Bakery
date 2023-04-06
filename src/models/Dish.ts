import { IDish } from '@/interfaces/bakery/IDish';

export class Dish implements IDish {
  public type: string;
  public name: string;
  public have_seconds_accepted: boolean;
  public have_seconds_times = 1;

  constructor(dish: IDish) {
    this.type = dish.type;
    this.name = dish.name;
    this.have_seconds_accepted = dish.have_seconds_accepted;
  }

  public print(): string {
    return this.have_seconds_times > 1 ? `${this.name}(${this.have_seconds_times}x)` : `${this.name}`;
  }
}
