import Duck from '../Duck/Duck';
import { RocketFlyBehavior } from '../../behavior/RocketFlyBehavior';

export class RocketDuck extends Duck {
  flyBehavior: FlyBehavior;

  constructor() {
    super();
    this.flyBehavior = new RocketFlyBehavior();
  }
}