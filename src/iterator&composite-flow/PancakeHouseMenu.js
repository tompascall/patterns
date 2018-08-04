// @flow

import MenuItem from './MenuItem';

export default class PancakeHouseMenu {
  menuItems: Array<MenuItem>;

  constructor() {
    this.menuItems = [];

    this.addItem('Pancake Breakfast', 'Pancakes with scrumbled eggs and toast', true, 2.99);

    this.addItem('Blueberry Pancakes', 'Pancakes made with fresh blueberries', true, 3.99);

    this.addItem('Regular Pancakes', 'Pancakes made with ham', false, 4.99);
  }

  addItem(name: string, description: string, vegetarian: boolean, price: number) {
    const menuItem = new MenuItem(name, description, vegetarian, price);
    this.menuItems.push(menuItem);
  }

  getItems() { return this.menuItems };
}