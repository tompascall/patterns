// @flow
import type { FlyBehavior } from '../interface/FlyBehavior';

export class RocketFlyBehavior implements FlyBehavior {
  fly() { console.log('Flying like a rocket!'); }
}
