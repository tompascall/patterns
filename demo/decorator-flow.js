import Espresso from '../src/decorator-flow/coffee/Espresso';
import DarkRoast from '../src/decorator-flow/coffee/DarkRoast';
import Whip from '../src/decorator-flow/condiment/Whip';
import Mocha from '../src/decorator-flow/condiment/Mocha';

const espresso = new Espresso();
console.log(`${espresso.getDescription()}: $${espresso.cost()}`);

const darkRoast2MochaWhip = new Whip(new Mocha(new Mocha(new DarkRoast())));
console.log(`${darkRoast2MochaWhip.getDescription()}: $${darkRoast2MochaWhip.cost()}`);
