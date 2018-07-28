// @flow

import PizzaStore from './PizzaStore';
import Pizza from '../pizza/Pizza';
import CAStyleCheesePizza from '../pizza/CAStyleCheesePizza';
import CAStyleVeggiePizza from '../pizza/CAStyleVeggiePizza';

export default class CAStylePizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    switch (type) {
      case 'cheese':
        return new CAStyleCheesePizza();
      case 'veggie':
        return new CAStyleVeggiePizza();
      default:
        return new Pizza();
    }
  }
}