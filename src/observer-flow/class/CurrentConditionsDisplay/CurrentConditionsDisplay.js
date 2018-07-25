import type { DisplayElement } from '../../interface/DisplayElement';
import type { Observer } from '../../interface/Observer';
import type { Subject } from '../../interface/Subject';

export default class CurrentConditionsDisplay implements Observer, DisplayElement {
  temperature: Number;
  humidity: Number;
  weatherData: Subject;

  constructor (weatherData: Subject) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  update(temperature: Number, humidity: Number, pressure: Number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.display();
  }

  display() {
    console.log(`Current conditions display:
      temperature: ${this.temperature}F,
      humidity:  ${this.humidity}%`);
  }
}