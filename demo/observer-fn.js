import weatherData from '../src/observer-pattern-fn/entity/weather-data';
import currentConditionsDisplay from "../src/observer-pattern-fn/entity/current-conditions-display";
import altDisplay from "../src/observer-pattern-fn/entity/alt-display";

const wData = weatherData();
const cConditionDisplay = currentConditionsDisplay(wData);
const aDisplay = altDisplay(wData);

const events = [
  () => wData.setMeasurements(80, 65, 30.4),
  () => wData.setMeasurements(90, 55, 33),
];

let counter = 0;
events.forEach(event => setTimeout(event, counter+= 1000));