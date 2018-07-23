import InterfaceError from '../../error/InterfaceError';

export default {
  display() { throw new InterfaceError(); }
};
