// @flow

import PizzaStore from './PizzaStore';
import Pizza from '../pizza/Pizza';
import CAPizzaIngredientFactory from '../ingredient/CAPizzaIngredientFactory';
import type { PizzaIngredientFactory } from '../ingredient/PizzaIngredientFactory';
import CheesePizza from '../pizza/CheesePizza';
import ClamPizza from '../pizza/ClamPizza';

export default class CAStylePizzaStore extends PizzaStore {
  pizza: Pizza;
  ingredientFactory: PizzaIngredientFactory;

  constructor() {
    super();
    this.ingredientFactory = new CAPizzaIngredientFactory();
  }

  createPizza(type: string): Pizza {
    switch (type) {
      case 'cheese':
        this.pizza = new CheesePizza(this.ingredientFactory);
        break;
      case 'clam':
        this.pizza = new ClamPizza(this.ingredientFactory);
        break;
      default:
        this.pizza = new Pizza();
    }
    return this.pizza;
  }
}
