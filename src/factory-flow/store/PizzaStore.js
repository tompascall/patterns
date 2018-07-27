
// @flow
import AbstractMethodError from '../../error/AbstractMethodError';
import Pizza from '../pizza/Pizza';

export default class PizzaStore {
  orderPizza(type: string): Pizza {
    const pizza: Pizza = this.createPizza(type);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza;
  }

  createPizza(type: string): Pizza {
    throw new AbstractMethodError();
  }
}