import { IDish } from '@/interfaces/bakery/IDish';
import { NonRepeatableDish } from '@/models/NonRepeatableDish';

export class Steak extends NonRepeatableDish implements IDish {
  public type = 'entrée';
  public name = 'steak';
}
