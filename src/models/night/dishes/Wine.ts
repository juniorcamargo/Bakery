import { IDish } from '@/interfaces/bakery/IDish';
import { NonRepeatableDish } from '@/models/NonRepeatableDish';

export class Wine extends NonRepeatableDish implements IDish {
  public type = 'drink';
  public name = 'wine';
}
