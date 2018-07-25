import Beverage from '../Beverage';
import prices from '../prices';

export default class DarkRoast extends Beverage {
  constructor() {
    super();
    this.description = 'Dark Roast Coffee';
  }

  cost() {
    return prices.coffee.DarkRoast;
  }
}