import FlyBehavior from '../FlyBehavior';

describe('FlyBehavior', () => {
  it('should fly', () => {
    expect(typeof (new FlyBehavior).fly).toBe('function');
  });
});