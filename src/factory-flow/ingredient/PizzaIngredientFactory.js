// @flow
import Dough from './Dough';
import Sauce from './Sauce';
import Cheese from './Cheese';
import Veggies from './Veggies';
import Pepperoni from './Pepperoni';
import Clam from './Clam';

export interface PizzaIngredientFactory {
  createDough(): Dough;
  createSauce(): Sauce;
  createCheese(): Cheese;
  createVeggies(): Veggies[];
  createPepperoni(): Pepperoni;
  createClam(): Clam;
};
