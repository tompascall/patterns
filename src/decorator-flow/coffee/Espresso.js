import Beverage from '../Beverage';
import prices from '../prices';

export default class Espresso extends Beverage {
  constructor() {
    super();
    this.description = 'Espresso';
  }

  cost() {
    return prices.coffee.Espresso;
  }
}