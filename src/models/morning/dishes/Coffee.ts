import { IDish } from '@/interfaces/bakery/IDish';

export class Coffee implements IDish {
  public type = 'drink';
  public name = 'coffee';
  public have_seconds_accepted = true;
  public have_seconds_times = 1;

  public print(): string {
    return this.have_seconds_times > 1 ? `${this.name}(${this.have_seconds_times}x)` : `${this.name}`;
  }
}
