// @flow

// import type { Iterator } from './Iterator';
// import MenuItem from './MenuItem';

// export interface Menu {
//   +createIterator: Iterator<MenuItem>
// }

import MenuComponent from './MenuComponent';

export default class Menu extends MenuComponent {
  name: string;
  description: string;
  menuComponents: any; /* MenuComponent[];  flow cannot handle Symbol.iterator properly */

  constructor(name: string, description: string) {
    super();
    this.name = name;
    this.description = description;
    this.menuComponents = [];
  }

  add(menuComponent: MenuComponent): void {
    this.menuComponents.push(menuComponent);
  }

  remove(menuComponent: MenuComponent): void {
    this.menuComponents = this.menuComponents.filter(mc => mc !== menuComponent);
  }

  getChild(i: number): MenuComponent {
    return this.menuComponents[i];
  }

  getName(): string {
      return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  print() {
    console.log(`${this.getName()} ${this.getDescription()}`);

    const iterator = this.menuComponents[Symbol.iterator]();
    let { value: menuComponent, done } = iterator.next();
    while (!done) {
      menuComponent.print();
      ({ value: menuComponent, done } = iterator.next());
    }
  }
}