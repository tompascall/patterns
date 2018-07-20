// @flow
import type { FlyBehavior } from '../../interface/FlyBehavior';

export default class {
  flyBehavior: FlyBehavior;

  setFlyBehavior(behavior: FlyBehavior) {
    this.flyBehavior = behavior;
    return this;
  }

  performFly() {
    this.flyBehavior.fly();
  }

  swim() { console.log('all duck can swim') }
}
