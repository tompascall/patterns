// @flow
import PancakeHouseMenu from './PancakeHouseMenu';
import DinerMenu from './DinerMenu';
import CafeMenu from './CafeMenu';
import MenuItem from './MenuItem';
import type { Iterator } from './Iterator';
import type { Menu } from './Menu';

export default class Waitress {
  pancakeHouseMenu: Menu;
  dinerMenu: Menu;
  cafeMenu: Menu;

  constructor(pancakeHouseMenu: Menu, dinerMenu: Menu, cafeMenu: Menu) {
    this.pancakeHouseMenu = pancakeHouseMenu;
    this.dinerMenu = dinerMenu;
    this.cafeMenu = cafeMenu;
  }

  print() {
    const pancakeIterator = this.pancakeHouseMenu.createIterator();
    const dinerIterator = this.dinerMenu.createIterator();
    const cafeIterator = this.cafeMenu.createIterator();
    console.log('MENU');
    console.log('BREAKFAST')
    this.printMenu(pancakeIterator);
    console.log('LUNCH');
    this.printMenu(dinerIterator);
    console.log('DINNER');
    this.printMenu(cafeIterator);
  }

  printMenu(iterator: Iterator) {
    let { value, done } = iterator.next();
    while (!done) {
      console.log(`${value.getName()} ${value.getPrice()} ${value.getDescription()}`);
      ({ value, done } = iterator.next());
    }
  }
}