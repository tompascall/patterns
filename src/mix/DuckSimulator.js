// @flow

import { Quackable } from './Quackable';
import MallardDuck from './MallardDuck';
import ReadheadDuck from './ReadheadDuck'
import DuckCall from './DuckCall'
import RubberDuck from './RubberDuck';
import GooseAdapter from './GooseAdapter';
import Goose from './Goose';
import QuackCounter from './QuackCounter';
import AbstractDuckFactory from './AbstractDuckFactory';
import AbstractGooseFactory from './AbstractGooseFactory';

export default class DuckSimulator {
  simulate(duckFactory: AbstractDuckFactory, duckGooseFactory: AbstractGooseFactory) {
    const mallardDuck: Quackable = duckFactory.createMallardDuck();
    const readheadDuck: Quackable = duckFactory.createRedheadDuck();
    const duckCall: Quackable = duckFactory.createDuckCall();
    const rubberDuck: Quackable = duckFactory.createRubberDuck();
    const gooseDuck: Quackable = duckGooseFactory.createGoose();

    this.doSimulate(mallardDuck);
    this.doSimulate(readheadDuck);
    this.doSimulate(duckCall);
    this.doSimulate(rubberDuck);
    this.doSimulate(gooseDuck);

    console.log(`The duck quacked ${QuackCounter.getQuacks()}`);
  }

  doSimulate(duck: Quackable) {
    duck.quack();
  }
}