// @flow

import { Quackable } from "./Quackable";
import Observable from "./Observable";
import Observer from './Observer';

export default class ReadheadDuck implements Quackable {
  observable: Observable;
  name: string;

  constructor() {
    this.observable = new Observable(this);
    this.name = 'Readhead Duck';
  }

  quack() {
    console.log('Quack');
    this.notifyObservers();
  }

  notifyObservers() {
    this.observable.notifyObservers();
  }

  registerObserver(observer: Observer) {
    this.observable.registerObserver(observer);
  }
}