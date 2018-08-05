// @flow

import Menu from './Menu';
import MenuItem from './MenuItem';

export default class CafeMenu extends Menu {
  constructor () {
    super('CAFE MENU', 'Dinner');
    this.add(new MenuItem('Veggie Burger and Air Fries', 'Veggie burger on a whole wheat bun, lettuce, tomato and fries', true, 3.99))
    this.add(new MenuItem('Soup of the day', 'A cup of the soup of the day, with a side salad', false, 3.69))
    this.add(new MenuItem('Burrito', 'A large burrito, with whole pinto  beans, salsa, guacamole', true, 4.29))
  }
}
