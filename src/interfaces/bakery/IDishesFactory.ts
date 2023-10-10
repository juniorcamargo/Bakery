import { IDish } from './IDish';

export interface IDishesFactory {
  create(key: string): IDish;
}
