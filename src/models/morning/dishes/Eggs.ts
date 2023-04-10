import { IDish } from '@/interfaces/bakery/IDish';

export class Eggs implements IDish {
  public type = 'entrée';
  public name = 'eggs';
  public have_seconds_accepted = false;
  public have_seconds_times = 1;

  public print(): string {
    return this.have_seconds_times > 1 ? `${this.name}(${this.have_seconds_times}x)` : `${this.name}`;
  }
}
