import Duck from './Duck';
import { RocketFlyBehavior } from '../../behavior/RocketFlyBehavior';

describe('Duck', () => {
  it('should swim', () => {
    expect(typeof new Duck().swim).toBe('function');
  });

  it('should set fly behavior', () => {
    const duck = new Duck();
    expect(duck.flyBehavior).toBe(undefined);
    duck.setFlyBehavior(new RocketFlyBehavior());
    expect(duck.flyBehavior instanceof RocketFlyBehavior);
  });

  it('should perform fly by flyBehavior', () => {
    const rocketDuck = new Duck().setFlyBehavior(new RocketFlyBehavior());
    spyOn(rocketDuck.flyBehavior, 'fly');
    rocketDuck.performFly();
    expect(rocketDuck.flyBehavior.fly).toHaveBeenCalled();
  });

});