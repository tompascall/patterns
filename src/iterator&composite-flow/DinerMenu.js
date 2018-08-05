// @flow

import Menu from './Menu';
import MenuItem from './MenuItem';
import DessertMenu from './DessertMenu';

export default class DinerMenu extends Menu {
  constructor () {
    super('DINER MENU', 'Lunch');
    this.add(new MenuItem('BLT', '(Faking) Bacon, lettuce, tomato', true, 2.99))
    this.add(new MenuItem('Vegetarian BLT', 'lettuce, tomato', false, 2.99))
    this.add(new MenuItem('Hotdog', 'A hot dog', false, 3.99))
    this.add(new DessertMenu());
  }
}