import { IDish } from '@/interfaces/bakery/IDish';
import { RepeatableDish } from '@/interfaces/bakery/RepeatableDish';

export class Potato extends RepeatableDish implements IDish {
  public type = 'side';
  public name = 'potato';
  public have_seconds_times = 1;

  public print(): string {
    return this.have_seconds_times > 1 ? `${this.name}(${this.have_seconds_times}x)` : `${this.name}`;
  }
}
