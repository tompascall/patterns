import Espresso from '../coffee/Espresso';
import Decaf from '../coffee/Decaf'
import DarkRoast from '../coffee/DarkRoast';
import HouseBlend from '../coffee/HouseBlend';

import Whip from '../condiment/Whip';
import Mocha from '../condiment/Mocha';
import Soy from '../condiment/Soy';
import SteamedMilk from '../condiment/SteamedMilk';

import prices from '../prices';

const coffeeTypes = {
  Espresso,
  DarkRoast,
  Decaf,
  HouseBlend,
};

describe('coffee', () => {
  it('should have cost by prices config', () => {
    Object.keys(coffeeTypes).forEach(coffeeType => {
      expect((new (coffeeTypes[coffeeType])).cost()).toBe(prices.coffee[coffeeType]);
    });
  });
});

describe('condiment', () => {
  it('should be combined with condiments', () => {
    Object.keys(coffeeTypes).forEach(coffeeType => {
      const coffee = new (coffeeTypes[coffeeType]);
      const combined = new Whip(new Mocha(new SteamedMilk(new Soy(coffee))));
      const { condiment } = prices;
      expect(combined.cost().toFixed(2))
        .toBe((
          coffee.cost() +
          condiment.Whip +
          condiment.Mocha +
          condiment.SteamedMilk +
          condiment.Soy).toFixed(2)
        );
    });
  });
});

// const darkRoast2MochaWhip = new Whip(new Mocha(new Mocha(new DarkRoast())));
// console.log(`${darkRoast2MochaWhip.getDescription()}: $${darkRoast2MochaWhip.cost()}`);