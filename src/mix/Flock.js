// @flow

import { Quackable } from "./Quackable";
import Observer from './Observer';

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
    this.notifyObservers();
  }

  notifyObservers() {}

  registerObserver(observer: Observer) {
    this.quackers.forEach(quacker => quacker.registerObserver(observer));
  }
}