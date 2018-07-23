import displayElement  from '../interface/display-element';
import observer from '../interface/observer';
import subject from '../interface/subject';

export default function (wData) {
  let weatherData;
  let temperature;
  let humidity;
  const altDisplay = Object.create({ ...observer, ...displayElement });

  weatherData = wData;
  weatherData.registerObserver(altDisplay);

  altDisplay.update = (...rest) => {
    [temperature, humidity] = rest;
    altDisplay.display();
  };

  altDisplay.display = () => {
    console.log(`alt display:
      temperature: ${temperature}F,
      humidity:  ${humidity}%`);
  };
}