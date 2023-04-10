import { IDish } from '@/interfaces/bakery/IDish';

export class ErrorDishe implements IDish {
  public type = 'error';
  public name = 'error';
  public have_seconds_accepted = false;
  public have_seconds_times = 1;

  public print(): string {
    return this.have_seconds_times > 1 ? `${this.name}(${this.have_seconds_times}x)` : `${this.name}`;
  }
}
