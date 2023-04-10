import { BaseDishesFactory } from './BaseDishesFactory';
import { ErrorDishe } from '../ErrorDishe';
import { Coffee } from '../morning/dishes/Coffee';
import { Eggs } from '../morning/dishes/Eggs';
import { Toast } from '../morning/dishes/Toast';

import { IDish } from '@/interfaces/bakery/IDish';

export class MorningDishesFactory extends BaseDishesFactory {
  public create(key: string): IDish {
    switch (key) {
      case '1':
        return new Eggs();
      case '2':
        return new Toast();
      case '3':
        return new Coffee();
      default:
        return new ErrorDishe();
    }
  }
}
