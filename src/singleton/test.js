import SingletonHeavyClass from './SingletonHeavyClass';
import HeavyClass from './HeavyClass';

describe('SingletonHeavyClass', () => {
  it('should throw error if it is tried to instantiate with new', () => {
    expect(() => new SingletonHeavyClass()).toThrow();
  });

  it('should instantiate with getInstance class property', () => {
    expect(() => SingletonHeavyClass.getInstance()).not.toThrow();
  });

  it('should return the same object when it is called more times', () => {
    const instance1 = SingletonHeavyClass.getInstance();
    const instance2 = SingletonHeavyClass.getInstance();
    expect(instance1 instanceof HeavyClass).toBe(true);
    expect(instance1).toBe(instance2);
  });
});