// @flow

import type { Iterator } from './Iterator';
import MenuItem from './MenuItem';

export interface Menu {
  +createIterator: Iterator<MenuItem>
}
