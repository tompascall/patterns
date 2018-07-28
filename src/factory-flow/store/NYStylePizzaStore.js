// @flow

import PizzaStore from './PizzaStore';
import Pizza from '../pizza/Pizza';
import NYStyleCheesePizza from '../pizza/NYStyleCheesePizza';
import NYStyleVeggiePizza from '../pizza/NYStyleVeggiePizza';

export default class NYStylePizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    switch (type) {
      case 'cheese':
        return new NYStyleCheesePizza();
      case 'veggie':
        return new NYStyleVeggiePizza();
      default:
        return new Pizza();
    }
  }
}