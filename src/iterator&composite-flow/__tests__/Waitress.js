import Waitress from '../Waitress';
import PancakeHouseMenu from '../PancakeHouseMenu';
import DinerMenu from '../DinerMenu';

describe('Waitress', () => {
  it('should print menus without error', () => {
    expect((new Waitress(new PancakeHouseMenu(), new DinerMenu()).print()));
  });
});

