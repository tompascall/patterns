import { WeatherData } from "../src/observer-pattern-flow/class/WeatherData/WeatherData";
import CurrentConditionsDisplay from "../src/observer-pattern-flow/class/CurrentConditionsDisplay/CurrentConditionsDisplay";
import AltDisplay from "../src/observer-pattern-flow/class/AltDisplay/AltDisplay";

const weatherData = new WeatherData();
const currentDisplay = new CurrentConditionsDisplay(weatherData);
const altDisplay = new AltDisplay(weatherData);

const events = [
  () => weatherData.setMeasurements(80, 65, 30.4),
  () => weatherData.setMeasurements(90, 55, 33),
];

let counter = 0;
events.forEach(event => setTimeout(event, counter+= 1000));