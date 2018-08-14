// @flow

import AbstractDuckFactory from "./AbstractDuckkFactory";
import QuackCounter from "./QuackCounter";
import MallardDuck from "./MallardDuck";
import ReadheadDuck from "./ReadheadDuck";
import DuckCall from "./DuckCall";
import RubberDuck from "./RubberDuck";

export default class CountingDuckFactory extends AbstractDuckFactory {
  createMallardDuck() {
    return new QuackCounter(new MallardDuck());
  }

  createRedheadDuck() {
    return new QuackCounter(new ReadheadDuck());
  }

  createDuckCall() {
    return new QuackCounter(new DuckCall());
  }

  createRubberDuck() {
    return new QuackCounter(new RubberDuck());
  }
}