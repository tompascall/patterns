import AbstractMethodError from '../error/AbstractMethodError';

export default class AbstractGooseFactory {
  createGoose() {
    throw new AbstractMethodError();
  }
}