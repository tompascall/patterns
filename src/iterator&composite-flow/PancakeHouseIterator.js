// @flow

import type { Iterator } from './Iterator';
import MenuItem from './MenuItem';

export default class PancakeHouseIterator implements Iterator {
  position: number;
  items: MenuItem[];

  constructor(items: MenuItem[]) {
    this.items = items;
    this.position = 0;
  }

  next() {
    if (this.position === this.items.length) {
      return { done: true };
    }
    return {
      value: this.items[this.position++],
      done: false
    }
  }
}