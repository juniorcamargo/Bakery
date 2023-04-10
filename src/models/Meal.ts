import { BaseDishesFactory } from './factories/BaseDishesFactory';

export abstract class Meal {
  public meal: string;
  public order: string;
  public factory: BaseDishesFactory;

  public printOrder(): string {
    return this.order;
  }
  public createOrder(options: string[]): string {
    let count = 0;
    options.sort();

    try {
      options.forEach(option => {
        if (option == '') {
          count++;
          return;
        }

        const dish = this.factory.create(option);
        dish.have_seconds_times = options.filter(value => value == option).length;
        if (!dish.have_seconds_accepted && dish.have_seconds_times > 1) {
          dish.have_seconds_times = 1;
          this.order += count === 0 ? `${dish.print()}, error` : `, ${dish.print()}, error`;
          throw new Error('');
        }

        this.order += count === 0 ? dish.print() : `, ${dish.print()}`;
        options = this.removeRepeatedOccurrences(option, options);

        count++;
      });
    } catch (error) {
      return this.order;
    }

    return this.order;
  }
  public removeRepeatedOccurrences(option: string, options: string[]): string[] {
    let indice = options.indexOf(option);
    while (indice >= 0) {
      options[indice] = '';
      indice = options.indexOf(option);
    }
    return options;
  }
}
