// @flow

import Beverage from '../Beverage';
import AbstractMethodError from '../../error/AbstractMethodError';

export default class CondimentDecorator extends Beverage {
  // maybe should call super here
  getDescription() {
    throw new AbstractMethodError();
  }
}