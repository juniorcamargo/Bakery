import { MorningDishesFactory } from './factories/MorningDishesFactory';
import { Meal } from './Meal';

export class MorningMeal extends Meal {
  public meal = 'morning';
  public order = '';
  public factory = new MorningDishesFactory();
}
