// @flow

import PizzaStore from './PizzaStore';
import Pizza from '../pizza/Pizza';
import NYPizzaIngredientFactory from '../ingredient/NYPizzaIngredientFactory';
import type { PizzaIngredientFactory } from '../ingredient/PizzaIngredientFactory';
import CheesePizza from '../pizza/CheesePizza';
import ClamPizza from '../pizza/ClamPizza';

export default class NYStylePizzaStore extends PizzaStore {
  pizza: Pizza;
  ingredientFactory: PizzaIngredientFactory;

  constructor() {
    super();
    this.ingredientFactory = new NYPizzaIngredientFactory();
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