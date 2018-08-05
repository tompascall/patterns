import type { Iterator } from './Iterator';

export default class NullIterator implements Iterator {
  next() {
    return { done: true };
  }
}