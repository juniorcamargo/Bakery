import { Dish } from '../Dish';

import { IDish } from '@/interfaces/bakery/IDish';

export class MorningDishesFactory {
  public static create(key: string): IDish {
    switch (key) {
      case '1':
        return new Dish({ type: 'entrée', name: 'eggs', have_seconds_accepted: false });
        break;
      case '2':
        return new Dish({ type: 'side', name: 'toast', have_seconds_accepted: false });
        break;
      case '3':
        return new Dish({ type: 'drink', name: 'coffee', have_seconds_accepted: true });
        break;
      // case '4':
      //   return new Dish({ type: 'dessert', name: 'cake', have_seconds_accepted: false });
      default:
        return new Dish({ type: 'error', name: 'error', have_seconds_accepted: false });
        break;
    }
  }
}
