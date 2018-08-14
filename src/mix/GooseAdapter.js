import { Quackable } from "./Quackable";
import Goose from "./Goose";
import Observable from "./Observable";
import Observer from './Observer';

// @flow

export default class GooseAdapter implements Quackable {
  goose: Goose;
  observable: Observable;

  constructor(goose: Goose) {
    this.goose = goose;
    this.name = goose.name;
    this.observable = new Observable(this);
  }

  quack() {
    this.goose.honk();
  }

  notifyObservers() {
    this.observable.notifyObservers();
  }

  registerObserver(observer: Observer) {
    this.observable.registerObserver(observer);
  }
}