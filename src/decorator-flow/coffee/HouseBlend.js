import Beverage from '../Beverage';
import prices from '../prices';

export default class HouseBlend extends Beverage {
  constructor() {
    super();
    this.description = 'House Blend Coffee';
  }

  cost() {
    return prices.coffee.HouseBlend;
  }
}