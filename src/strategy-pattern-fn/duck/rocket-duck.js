import duck from './duck';
import rocketFlyBehavior from '../behavior/rocket-fly-behavior';

export default function rocketDuck () {
  const child = Object.create(duck());
  child.setFlyBehavior(rocketFlyBehavior);
  return child;
}