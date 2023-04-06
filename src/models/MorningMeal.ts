import { MorningDishesFactory } from './factories/MorningDishesFactory';

import { IMeal } from '@/interfaces/IMeal';

export class MorningMeal implements IMeal {
  public meal = 'morning';
  public order: string;

  public printOrder(): string {
    return this.order;
  }

  public createOrder(options: string[]): string {
    this.order = this.meal + ', ';
    let count = 0;
    options.sort();
    options.forEach(option => {
      if (option == '') return;

      const dish = MorningDishesFactory.create(option);
      console.log('have_seconds_accepted:', dish.have_seconds_accepted, dish);
      if (dish.have_seconds_accepted) {
        dish.have_seconds_times = options.filter(value => value == option).length;
        let indice = options.indexOf(option);
        while (indice >= 0) {
          options[indice] = '';
          indice = options.indexOf(option);
        }
      }

      this.order += dish.print();
      if (options[count + 1] !== undefined && options[count + 1] !== '') {
        this.order += ', ';
      }
      count++;
    });

    return this.order;
  }
}
