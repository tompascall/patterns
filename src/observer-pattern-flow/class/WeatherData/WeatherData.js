// @flow

import type { Subject } from '../../interface/Subject';
import type { Observer } from '../../interface/Observer';

export class WeatherData implements Subject {
  observers:  Array<Observer>;
  temperature: Number;
  humidity: Number;
  pressure: Number;

  constructor() {
    this.observers = [];
  }

  registerObserver(observer: Observer) {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer) {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers = [
        ...this.observers.slice(0, index),
        ...this.observers.slice(index + 1),
      ];
    }
  }

  notifyObservers() {
    this.observers.forEach(observer =>
      observer.update(this.temperature, this.humidity, this.pressure)
    );
  }

  measurementChanged() {
    this.notifyObservers();
  }

  setMeasurements(temperature: Number, humidity: Number, pressure: Number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementChanged();
  }
}