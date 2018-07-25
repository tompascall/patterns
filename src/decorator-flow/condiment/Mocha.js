import CondimentDecorator from './CondimentDecorator';
import prices from '../prices';

export default class Mocha extends CondimentDecorator {
  constructor(beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription() {
    return `${this.beverage.getDescription()}, Mocha`;
  }

  cost() {
    return this.beverage.cost() + prices.condiment.Mocha;
  }
}