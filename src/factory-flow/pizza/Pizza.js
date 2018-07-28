// @flow

import AbstractMethodError from '../../error/AbstractMethodError';

export default class Pizza {
  name: string;
  dough: string;
  sauce: string;
  cheese: string;
  toppings: string[];

  prepare() {
    throw new AbstractMethodError();
  }
  bake() { console.log('Bake for 25 minutes at 350') }
  cut() { console.log('Cutting into diagonal slices') }
  box() { console.log('Place pizza in official Pizzastore box') }

  getName() { return this.name }
}