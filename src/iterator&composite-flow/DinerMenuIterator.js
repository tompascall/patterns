// @flow

import type { Iterator } from './Iterator';
import MenuItem from './MenuItem';

export default class DinerMenuIterator implements Iterator {
  position: number;
  items: any; // Set<MenuItem>; // flow cannot solve it right
  iterator: Iterator;

  constructor(items: any /* Set<MenuItem> */) {
    this.items = items;
    this.iterator = items[Symbol.iterator]();
  }

  next() {
    return this.iterator.next();
  }
}