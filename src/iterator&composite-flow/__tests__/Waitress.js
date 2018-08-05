import Waitress from '../Waitress';
import Menu from '../Menu';
import PancakeHouseMenu from '../PancakeHouseMenu';
import DinerMenu from '../DinerMenu';
import CafeMenu from '../CafeMenu';
import DessertMenu from '../DessertMenu';

const allMenus = new Menu('ALL MENUS', 'All menus combined');
allMenus.add(new PancakeHouseMenu());
allMenus.add(new DinerMenu());
allMenus.add(new CafeMenu());

describe('Waitress', () => {
  it('should print menus without error', () => {
    expect(() => (new Waitress(allMenus)).print()).not.toThrow();
  });
});
