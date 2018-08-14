// @flow

import { Quackable } from "./Quackable";
import Observable from "./Observable";
import Observer from './Observer';

export default class QuackCounter implements Quackable {
  duck: Quackable;
  observable: Observable;
  name: string;

  static getQuacks() {
    return QuackCounter.numberOfQuacks;
  }
  static numberOfQuacks: number;

  constructor(duck: Quackable) {
    this.name = duck.name;
    this.duck = duck;
    this.observable = new Observable(this);
  }

  quack() {
    this.duck.quack();
    QuackCounter.numberOfQuacks++;
    this.notifyObservers();
  }

  notifyObservers() {
    this.observable.notifyObservers();
  }

  registerObserver(observer: Observer) {
    this.observable.registerObserver(observer);
  }
}

QuackCounter.numberOfQuacks = 0;
