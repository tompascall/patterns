import DuckSimulator from './DuckSimulator';
import CountingDuckFactory from './CountingDuckFactory';
import DuckGooseFactory from './DuckGooseFactory';

describe('DuckSimulator Demo', () => {
  it('should demo simulator', () => {
    (new DuckSimulator()).simulate(new CountingDuckFactory(), new DuckGooseFactory());
  });
});