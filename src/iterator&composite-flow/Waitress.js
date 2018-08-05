// @flow
import PancakeHouseMenu from './PancakeHouseMenu';
import DinerMenu from './DinerMenu';
import CafeMenu from './CafeMenu';
import MenuItem from './MenuItem';
import type { Iterator } from './Iterator';
import type { Menu } from './Menu';

export default class Waitress {
  menus: any /* Menu[]; // flow cannot handle Symbol.iterator properly */
  constructor(menus: any /* Menu[] */) {
    this.menus = menus;
  }

  print() {
    const menuIterator = this.menus[Symbol.iterator]();
    let { value: menu, done } = menuIterator.next();
    while (!done) {
      this.printMenu(menu.createIterator());
      ({ value: menu, done } = menuIterator.next());
    }
  }


  printMenu(iterator: Iterator) {
    let { value, done } = iterator.next();
    while (!done) {
      console.log(`${value.getName()} ${value.getPrice()} ${value.getDescription()}`);
      ({ value, done } = iterator.next());
    }
  }
}