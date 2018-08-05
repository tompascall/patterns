// @flow
import MenuComponent from './MenuComponent';

export default class Waitress {
  allMenus: MenuComponent;

  constructor(allMenus: MenuComponent) {
    this.allMenus = allMenus;
  }

  print() {
    this.allMenus.print();
  }
}