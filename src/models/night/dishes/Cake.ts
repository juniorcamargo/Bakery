import { IDish } from '@/interfaces/bakery/IDish';

export class Cake implements IDish {
  public type = 'dessert';
  public name = 'cake';
  public have_seconds_accepted = false;
  public have_seconds_times = 1;

  public print(): string {
    return this.have_seconds_times > 1 ? `${this.name}(${this.have_seconds_times}x)` : `${this.name}`;
  }
}
