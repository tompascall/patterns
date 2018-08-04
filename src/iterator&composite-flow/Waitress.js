// @flow
import PancakeHouseMenu from './PancakeHouseMenu';
import DinerMenu from './DinerMenu';
import MenuItem from './MenuItem';

export default class Waitress {
  breakfastItems: MenuItem[];
  lunchItems: Set<MenuItem>;

  constructor() {
    this.breakfastItems = (new PancakeHouseMenu()).getItems();
    this.lunchItems = (new DinerMenu()).getItems();
  }

  print() {
    for (let menuItem of this.breakfastItems) {
      console.log(`${menuItem.getName()} ${menuItem.getPrice()} ${menuItem.getDescription()}`);
    }

    for (let menuItem of this.lunchItems) {
      console.log(`${menuItem.getName()} ${menuItem.getPrice()} ${menuItem.getDescription()}`);
    }
  }
}