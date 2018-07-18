// @flow
import type { FlyBehavior } from '../interface/FlyBehavior';

export class IonRocketFlyBehavior implements FlyBehavior {
  fly() { console.log('Flying like an ion-rocket!'); }
}
