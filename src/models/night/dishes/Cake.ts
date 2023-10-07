import { IDish } from '@/interfaces/bakery/IDish';
import { NonRepeatableDish } from '@/models/NonRepeatableDish';

export class Cake extends NonRepeatableDish implements IDish {
  public type = 'dessert';
  public name = 'cake';
}
