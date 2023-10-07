import { IDish } from '@/interfaces/bakery/IDish';
import { NonRepeatableDish } from '@/models/NonRepeatableDish';

export class Toast extends NonRepeatableDish implements IDish {
  public type = 'side';
  public name = 'toast';
}
