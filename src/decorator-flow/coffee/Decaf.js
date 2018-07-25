import Beverage from '../Beverage';
import prices from '../prices';

export default class Decaf extends Beverage {
  constructor() {
    super();
    this.description = 'Decaf Coffee';
  }

  cost() {
    return prices.coffee.Decaf;
  }
}