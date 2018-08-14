// @flow

import { QuackObservable } from "./QuackObservable";
import Observer from './Observer';

export default class Observable implements QuackObservable {
  observers: Observer[];
  duck: QuackObservable;

  constructor(duck: QuackObservable) {
    this.duck = duck;
    this.observers = [];
  }

  registerObserver(observer: Observer) {
    this.observers.push(observer);
  }

  notifyObservers() {
    this.observers.forEach(observer => observer.update(this.duck));
  }
}