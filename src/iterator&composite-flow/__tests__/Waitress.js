import Waitress from '../Waitress';
import PancakeHouseMenu from '../PancakeHouseMenu';
import DinerMenu from '../DinerMenu';
import CafeMenu from '../CafeMenu';

describe('Waitress', () => {
  it('should print menus without error', () => {
    expect(() =>
      (new Waitress([
        new PancakeHouseMenu(),
        new DinerMenu(),
        new CafeMenu(),
      ]
      )).print()).not.toThrow();
  });
});
