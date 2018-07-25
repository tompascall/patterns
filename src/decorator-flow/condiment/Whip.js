import CondimentDecorator from './CondimentDecorator';
import prices from '../prices';

export default class Whip extends CondimentDecorator {
  constructor(beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription() {
    return `${this.beverage.getDescription()}, Whip`;
  }

  cost() {
    return this.beverage.cost() + prices.condiment.Whip;
  }
}