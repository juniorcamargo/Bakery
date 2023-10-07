import { IDish } from '@/interfaces/bakery/IDish';
import { NonRepeatableDish } from '@/models/NonRepeatableDish';

export class Eggs extends NonRepeatableDish implements IDish {
  public type = 'entrée';
  public name = 'eggs';
}
