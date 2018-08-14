import DuckSimulator from './DuckSimulator';
import CountingDuckFactory from './CountingDuckFactory';

describe('DuckSimulator Demo', () => {
  it('should demo simulator', () => {
    (new DuckSimulator()).simulate(new CountingDuckFactory());
  });
});