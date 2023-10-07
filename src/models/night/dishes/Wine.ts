import { IDish } from '@/interfaces/bakery/IDish';
import { NonRepeatableDish } from '@/interfaces/bakery/NonRepeatableDish';

export class Wine extends NonRepeatableDish implements IDish {
  public type = 'drink';
  public name = 'wine';
  public have_seconds_times = 1;

  public print(): string {
    return this.have_seconds_times > 1 ? `${this.name}(${this.have_seconds_times}x)` : `${this.name}`;
  }
}
