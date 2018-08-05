// @flow

import Menu from './Menu';
import MenuItem from './MenuItem';

export default class DessertMenu extends Menu {
  constructor () {
    super('DESSERT MENU', 'Dessert of course!');
    this.add(new MenuItem('Apple Pie','Apple pie with flakey crust, topped with vanilla icecream', true, 1.59))
    this.add(new MenuItem('Pudding', 'Chocolate Pudding', true, .99))
  }
}