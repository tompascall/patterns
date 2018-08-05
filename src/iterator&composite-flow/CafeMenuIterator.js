// @flow

import type { Iterator } from './Iterator';
import MenuItem from './MenuItem';

export default class CafeMenuIterator implements Iterator {
  items:  any; // Map<string, MenuItem>; // flow cannot handle Symbol.iterator properly
  iterator: Iterator;

  constructor(items:  any /* Map<string, MenuItem> */) {
    this.items = items;
    this.iterator = items[Symbol.iterator]();
  }

  next() {
    const { value: nextValue = [], done } = this.iterator.next();
    const [, value] = nextValue;
    return { value, done };
  }
}
