// @flow

import Menu from './Menu';
import MenuItem from './MenuItem';

export default class PancakeHouseMenu extends Menu {
  constructor () {
    super('PANCAKE HOUSE MENU', 'Breakfast');
    this.add(new MenuItem('Pancake Breakfast', 'Pancakes with scrumbled eggs and toast', true, 2.99))
    this.add(new MenuItem('Blueberry Pancakes', 'Pancakes made with fresh blueberries', true, 3.99))
    this.add(new MenuItem('Regular Pancakes', 'Pancakes made with ham', false, 4.99))
  }
}
