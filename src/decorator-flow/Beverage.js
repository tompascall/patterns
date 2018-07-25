// @flow

import AbstractMethodError from '../error/AbstractMethodError';

export default class Beverage {
  description: string;

  constructor() {
    this.description = 'Unknown beverage';
  }

  getDescription(): string {
    return this.description;
  }

  cost() {
    throw new AbstractMethodError();
  }
}