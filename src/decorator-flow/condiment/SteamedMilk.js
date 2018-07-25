import CondimentDecorator from './CondimentDecorator';
import prices from '../prices';

export default class SteamedMilk extends CondimentDecorator {
  constructor(beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription() {
    return `${this.beverage.getDescription()}, Steamed milk`;
  }

  cost() {
    return this.beverage.cost() + prices.condiment.SteamedMilk;
  }
}