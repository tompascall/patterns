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

  printVegetarianMenu() {
    const iterator = this.allMenus.createIterator();
    console.log('VEGETARIAN MENU');

    let { value: menuComponent, done } = iterator.next();
    while (!done) {
      try {
        if (menuComponent.isVegetarian()) {
          menuComponent.print();
        }
      } catch (e) {
        // not vegetarian, do nothing here
      }
      ({ value: menuComponent, done } = iterator.next());
    }
  }
}