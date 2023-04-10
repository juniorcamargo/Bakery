import { NightDishesFactory } from './factories/NightDishesFactory';
import { Meal } from './Meal';

export class NightMeal extends Meal {
  public meal = 'night';
  public order = '';
  public factory = new NightDishesFactory();
}
