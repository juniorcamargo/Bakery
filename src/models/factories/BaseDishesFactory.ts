import { IDish } from '@/interfaces/bakery/IDish';

export abstract class BaseDishesFactory {
  public abstract create(key: string): IDish;
}
