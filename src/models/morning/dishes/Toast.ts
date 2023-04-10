import { IDish } from '@/interfaces/bakery/IDish';

export class Toast implements IDish {
  public type = 'side';
  public name = 'toast';
  public have_seconds_accepted = false;
  public have_seconds_times = 1;

  public print(): string {
    return this.have_seconds_times > 1 ? `${this.name}(${this.have_seconds_times}x)` : `${this.name}`;
  }
}
