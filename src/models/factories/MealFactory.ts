import { Meal } from '../Meal';
import { MorningMeal } from '../MorningMeal';
import { NightMeal } from '../NightMeal';

export class MealFactory {
  public static create(meal: string): Meal {
    switch (meal) {
      case 'morning':
        return new MorningMeal();
      case 'night':
        return new NightMeal();
      default:
        break;
    }
  }
}
