import { IDish } from '@/interfaces/bakery/IDish';
import { NonRepeatableDish } from '@/interfaces/bakery/NonRepeatableDish';

export class Cake extends NonRepeatableDish implements IDish {
  public type = 'dessert';
  public name = 'cake';
  public have_seconds_times = 1;

  public print(): string {
    return this.have_seconds_times > 1 ? `${this.name}(${this.have_seconds_times}x)` : `${this.name}`;
  }
}
