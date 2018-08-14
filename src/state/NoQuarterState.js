// @flow

import type { State } from './State';
import GumballMachine from './GumballMachine';

export default class NoQuarterState implements State {
  gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  insertQuarter(): void {
    console.log('You inserted a quarter');
    this.gumballMachine.setState(this.gumballMachine.getHasQuarterState());
  }

  ejectQuarter(): void {
    console.log('You haven‘t inserted a quarter yet');
  }

  turnCrank(): void {
    console.log('You turned but there is no quarter');
  }

  dispense(): void {
    console.log('You need to pay first');
  }
}