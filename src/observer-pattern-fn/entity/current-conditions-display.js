import displayElement  from '../interface/display-element';
import observer from '../interface/observer';
import subject from '../interface/subject';

export default function (wData) {
  let weatherData;
  let temperature;
  let humidity;
  const currentConditionDisplay = Object.create({ ...observer, ...displayElement });

  weatherData = wData;
  weatherData.registerObserver(currentConditionDisplay);

  currentConditionDisplay.update = (...rest) => {
    [temperature, humidity] = rest;
    currentConditionDisplay.display();
  };

  currentConditionDisplay.display = () => {
    console.log(`Current conditions display:
      temperature: ${temperature}F,
      humidity:  ${humidity}%`);
  };
}