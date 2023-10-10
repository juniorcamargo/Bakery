import { IDish } from '@/interfaces/bakery/IDish';
import { RepeatableDish } from '@/models/RepeatableDish';

export class Coffee extends RepeatableDish implements IDish {
  public type = 'drink';
  public name = 'coffee';
}
