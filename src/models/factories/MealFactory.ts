import { MorningDishesFactory } from './MorningDishesFactory';
import { NightDishesFactory } from './NightDishesFactory';
import { Meal } from '../Meal';

export class MealFactory {
  public static create(meal: string): Meal {
    switch (meal) {
      case 'morning':
        return new Meal('morning', new MorningDishesFactory());
      case 'night':
        return new Meal('night', new NightDishesFactory());
      default:
        break;
    }
  }
}
