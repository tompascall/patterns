import subject from '../interface/subject';
import observer from '../interface/observer';

export default function () {
  let observers = [];
  let temperature;
  let humidity;
  let pressure;
  const weatherData = Object.create(subject);

  weatherData.registerObserver = (observer) => {
    observers.push(observer);
  };

  weatherData.removeObserver = (observer) => {
    const index = observers.indexOf(observer);
    if (index > -1) {
      observers = [
        this.observers.slice(0, index),
        this.observers.slice(index + 1),
      ];
    }
  };

  weatherData.notifyObservers = () => {
    observers.forEach(observer =>
      observer.update(temperature, humidity, pressure)
    );
  };

  weatherData.measurementChanged = () => {
    weatherData.notifyObservers();
  };

  weatherData.setMeasurements = (...rest) => {
    [temperature, humidity, pressure] = rest;
    weatherData.measurementChanged();
  };

  return weatherData;
};
