// @flow
import PancakeHouseMenu from './PancakeHouseMenu';
import DinerMenu from './DinerMenu';
import MenuItem from './MenuItem';
import type { Iterator } from './Iterator';

export default class Waitress {
  pancakeHouseMenu: PancakeHouseMenu;
  dinerMenu: DinerMenu;

  constructor(pancakeHouseMenu: PancakeHouseMenu, dinerMenu: DinerMenu) {
    this.pancakeHouseMenu = pancakeHouseMenu;
    this.dinerMenu = dinerMenu;
  }

  print() {
    const pancakeIterator = this.pancakeHouseMenu.createIterator();
    const dinerIterator = this.dinerMenu.createIterator();
    this.printMenu(pancakeIterator);
    this.printMenu(dinerIterator);
  }

  printMenu(iterator: Iterator) {
    let { value, done } = iterator.next();
    while (!done) {
      console.log(`${value.getName()} ${value.getPrice()} ${value.getDescription()}`);
      ({ value, done } = iterator.next());
    }
  }
}