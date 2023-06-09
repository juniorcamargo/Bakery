import { BaseDishesFactory } from './BaseDishesFactory';
import { ErrorDishe } from '../ErrorDishe';
import { Cake } from '../night/dishes/Cake';
import { Potato } from '../night/dishes/Potato';
import { Steak } from '../night/dishes/Steak';
import { Wine } from '../night/dishes/Wine';

import { IDish } from '@/interfaces/bakery/IDish';

export class NightDishesFactory extends BaseDishesFactory {
  public create(key: string): IDish {
    switch (key) {
      case '1':
        return new Steak();
      case '2':
        return new Potato();
      case '3':
        return new Wine();
      case '4':
        return new Cake();
      default:
        return new ErrorDishe();
    }
  }
}
