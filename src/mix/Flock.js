// @flow

import { Quackable } from "./Quackable";

export default class Flock implements Quackable {
  quackers: Quackable[];

  constructor() {
    this.quackers = [];
  }

  add(quacker: Quackable) {
    this.quackers.push(quacker);
  }

  quack() {
    this.quackers.forEach(quacker => quacker.quack());
  }
}