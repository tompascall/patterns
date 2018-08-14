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
import Flock from './Flock';

export default class DuckSimulator {
  simulate(duckFactory: AbstractDuckFactory, duckGooseFactory: AbstractGooseFactory) {
    const mallardDuck: Quackable = duckFactory.createMallardDuck();
    const readheadDuck: Quackable = duckFactory.createRedheadDuck();
    const duckCall: Quackable = duckFactory.createDuckCall();
    const rubberDuck: Quackable = duckFactory.createRubberDuck();
    const gooseDuck: Quackable = duckGooseFactory.createGoose();

    const flockOfDucks = new Flock();
    flockOfDucks.add(gooseDuck);
    flockOfDucks.add(readheadDuck);
    flockOfDucks.add(duckCall);
    flockOfDucks.add(rubberDuck);

    const flockOfMallards = new Flock();
    const mallardDuck1: Quackable = duckFactory.createMallardDuck();
    const mallardDuck2: Quackable = duckFactory.createMallardDuck();
    const mallardDuck3: Quackable = duckFactory.createMallardDuck();
    const mallardDuck4: Quackable = duckFactory.createMallardDuck();
    flockOfMallards.add(mallardDuck1);
    flockOfMallards.add(mallardDuck2);
    flockOfMallards.add(mallardDuck3);
    flockOfMallards.add(mallardDuck4);

    flockOfDucks.add(flockOfMallards);

    this.doSimulate(flockOfDucks);
    this.doSimulate(flockOfMallards);

    console.log(`The duck quacked ${QuackCounter.getQuacks()}`);
  }

  doSimulate(duck: Quackable) {
    duck.quack();
  }
}