// @flow

import MenuComponent from './MenuComponent';
import NullIterator from './NullIterator';

export default class MenuItem extends MenuComponent {
  name: string;
  description: string;
  vegetarian: boolean;
  price: number;

  constructor(name: string, description: string, vegetarian: boolean, price: number) {
    super();
    this.name = name;
    this.description = description;
    this.vegetarian = vegetarian;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }

  getPrice() {
    return this.price;
  }

  isVegetarian() {
    return this.vegetarian;
  }

  print() {
    console.log(`
      ${this.getName()} ${(this.isVegetarian() ? '(v)': '')} ${this.getPrice()} ${this.getDescription()}`);
  }

  createIterator() {
    return new NullIterator();
  }
}