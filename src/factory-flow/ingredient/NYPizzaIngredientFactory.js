// @flow
import type {PizzaIngredientFactory} from './PizzaIngredientFactory';
import ThinCrustDough from './ThinCrustDough';
import MarianaSauce from './MarianaSauce';
import ReggianoCheese from './ReggianoCheese';
import SlicedPepperoni from './SlicedPepperoni';
import FreshClams from './FreshClams';

export default class NYPizzaIngredientFactory implements PizzaIngredientFactory {
  createDough() {
    return new ThinCrustDough();
  }
  createSauce() {
    return new MarianaSauce();
  }
  createCheese() {
    return new ReggianoCheese();
  }
  createVeggies() {
    return ['Garlic', 'Onion', 'Mushroom', 'RedPepper'];
  }
  createPepperoni() {
    return new SlicedPepperoni();
  }
  createClam() {
    return new FreshClams();
  }
}