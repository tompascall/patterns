//@flow

import AbstractMethodError from '../error/AbstractMethodError';

export default class AbstractDuckFactory {
  createMallardDuck() {
    throw new AbstractMethodError();
  }

  createRedheadDuck() {
    throw new AbstractMethodError();
  }

  createDuckCall() {
    throw new AbstractMethodError();
  }

  createRubberDuck() {
    throw new AbstractMethodError();
  }
}