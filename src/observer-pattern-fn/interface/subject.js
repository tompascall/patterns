import InterfaceError from '../../error/InterfaceError';

export default {
  registerObserver() { throw new InterfaceError(); },
  removeObserver() { throw new InterfaceError(); },
  notifyObservers() { throw new InterfaceError(); },
}
