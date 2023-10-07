import { ErrorDishe } from '../ErrorDishe';
import { Coffee } from '../morning/dishes/Coffee';
import { Eggs } from '../morning/dishes/Eggs';
import { Toast } from '../morning/dishes/Toast';

import { IDish } from '@/interfaces/bakery/IDish';
import { IDishesFactory } from '@/interfaces/bakery/IDishesFactory';

export class MorningDishesFactory implements IDishesFactory {
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
