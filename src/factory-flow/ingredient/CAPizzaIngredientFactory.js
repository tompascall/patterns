// @flow
import type { PizzaIngredientFactory } from './PizzaIngredientFactory';
import ThickCrustDough from './ThickCrustDough';
import PlumTomatoSauce from './PlumTomatoSauce';
import MozzarellaCheese from './MozzarellaCheese';
import SlicedPepperoni from './SlicedPepperoni';
import FrozenClam from './FrozenClam';

export default class CAPizzaIngredientFactory implements PizzaIngredientFactory {
  createDough() {
    return new ThickCrustDough();
  }
  createSauce() {
    return new PlumTomatoSauce();
  }
  createCheese() {
    return new MozzarellaCheese();
  }
  createVeggies() {
    return ['Spinach', 'BlackOlives', 'EggPlant'];
  }
  createPepperoni() {
    return new SlicedPepperoni();
  }
  createClam() {
    return new FrozenClam();
  }
}