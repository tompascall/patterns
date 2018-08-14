// @flow

import { Quackable } from "./Quackable";


export default class QuackCounter implements Quackable {
  duck: Quackable;

  static getQuacks() {
    return QuackCounter.numberOfQuacks;
  }
  static numberOfQuacks: number;

  constructor(duck: Quackable) {
    this.duck = duck;
  }

  quack() {
    this.duck.quack();
    QuackCounter.numberOfQuacks++;
  }
}

QuackCounter.numberOfQuacks = 0;
