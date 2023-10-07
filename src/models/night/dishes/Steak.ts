import { IDish } from '@/interfaces/bakery/IDish';
import { NonRepeatableDish } from '@/interfaces/bakery/NonRepeatableDish';

export class Steak extends NonRepeatableDish implements IDish {
  public type = 'entrée';
  public name = 'steak';
  public have_seconds_times = 1;

  public print(): string {
    return this.have_seconds_times > 1 ? `${this.name}(${this.have_seconds_times}x)` : `${this.name}`;
  }
}
