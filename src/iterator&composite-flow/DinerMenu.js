// @flow

import MenuItem from './MenuItem';

export default class DinerMenu {
  menuItems: Set<MenuItem>;

  constructor() {
    this.menuItems = new Set();

    this.addItem('BLT', '(Faking) Bacon, lettuce, tomato', true, 2.99);

    this.addItem('Vegetarian BLT', 'lettuce, tomato', false, 2.99);

    this.addItem('Hotdog', 'A hot dog', false, 3.99);
  }

  addItem(name: string, description: string, vegetarian: boolean, price: number) {
    const menuItem = new MenuItem(name, description, vegetarian, price);
    this.menuItems.add(menuItem);
  }

  getItems() { return this.menuItems };
}