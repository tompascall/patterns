// @flow

import PizzaStore from './PizzaStore';
import Pizza from '../pizza/Pizza';
import NYStyleCheesePizza from '../pizza/NYStyleCheesePizza';

export default class NYStylePizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    switch (type) {
      case 'cheese':
        return new NYStyleCheesePizza();
      default:
        return new Pizza();
    }
  }
}