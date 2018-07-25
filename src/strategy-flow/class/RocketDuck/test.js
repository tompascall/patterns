import { RocketDuck } from './RocketDuck';
import { RocketFlyBehavior } from '../../behavior/RocketFlyBehavior';

describe('RocketDuck', () => {
  it('should use RocketFlyBehavior', () => {
    const rocketDuck = new RocketDuck();
    expect(rocketDuck.flyBehavior instanceof RocketFlyBehavior).toBe(true);
  });
});
