import { IDish } from '@/interfaces/bakery/IDish';
import { RepeatableDish } from '@/models/RepeatableDish';

export class Potato extends RepeatableDish implements IDish {
  public type = 'side';
  public name = 'potato';
}
