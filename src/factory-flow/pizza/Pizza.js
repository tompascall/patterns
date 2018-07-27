// @flow

import AbstracrMethodError from '../../error/AbstractMethodError';

export default class Pizza {
  prepare() { throw new AbstracrMethodError() }
  bake() { throw new AbstracrMethodError() }
  cut() { throw new AbstracrMethodError() }
  box() { throw new AbstracrMethodError() }
}