import type { PizzaIngredientFactory } from '../ingredient/PizzaIngredientFactory';
import Pizza from '../pizza/Pizza';

export default class ClamPizza extends Pizza {
  ingredientFactory: PizzaIngredientFactory;

  constructor(ingredientFactory: PizzaIngredientFactory) {
    super();
    this.ingredientFactory = ingredientFactory;
  }

  prepare() {
    console.log(`Name: ${this.name}`);
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSauce();
    this.cheese = this.ingredientFactory.createCheese();
    this.clam = this.ingredientFactory.createClam();
  }
}