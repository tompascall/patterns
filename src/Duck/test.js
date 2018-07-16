import Duck from './Duck';

describe('Duck', () => {
  it('should swim', () => {
    expect (typeof new Duck().swim).toBe('function');
  });
});