import { IBakeryService } from '@/interfaces/bakery/IBakeryService';
import { MealFactory } from '@/models/factories/MealFactory';

export class BakeryService implements IBakeryService {
  public async create(order: string): Promise<string> {
    const data = order.split(',').map(value => {
      return value.trim();
    });
    const mealType = data.splice(0, 1)[0];
    const meal = MealFactory.create(mealType);
    return meal.createOrder(data);
  }
}

export default new BakeryService();
