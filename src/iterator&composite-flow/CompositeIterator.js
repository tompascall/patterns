import type { Iterator } from './Iterator';

export default class compositeIterator implements Iterator {
  stack: Iterator[];

  constructor(iterator: Iterator) {
    this.stack = [iterator];
  }

  next() {
    if (this.isStackEmpty()) {
      return { done: true };
    }
    const iterator = this.getStackPeek();
    const { value: component, done } = iterator.next();
    if (done) {
      this.stack.pop();
      return this.next();
    }
    this.stack.push(component.createIterator());
    return { value: component, done: false };
  }

  isStackEmpty() {
    return this.stack.length === 0;
  }

  getStackPeek() {
    return this.stack[this.stack.length - 1];
  }
}