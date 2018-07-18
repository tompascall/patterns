import rocketDuck from './rocket-duck';
import duck from '../duck/duck';
import rocketFlyBehavior from '../behavior/rocket-fly-behavior';
import assert from 'assert';

describe('rocketDuck', () => {
  it('should be a duck', () => {
    const rDuck = rocketDuck();
    assert.equal(JSON.stringify(Object.getPrototypeOf(rDuck)), JSON.stringify(duck()));
  });
  it('should perform a rocket fly', () => {
    const rDuck = rocketDuck();
    expect(rocketDuck().flyBehavior).toBe(rocketFlyBehavior);
  });
});