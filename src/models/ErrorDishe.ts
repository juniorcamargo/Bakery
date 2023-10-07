import { IDish } from '@/interfaces/bakery/IDish';

export class ErrorDishe implements IDish {
  public type = 'error';
  public name = 'error';
}
