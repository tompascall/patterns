
// @flow

import type { State } from './State';
import GumballMachine from './GumballMachine';

export default class SoldState implements State {
  gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  insertQuarter(): void {
    console.log('Please wait, we are already giving you a gumball');
  }

  ejectQuarter(): void {
    console.log('Sorry, you already tuned the crank!');
  }

  turnCrank(): void {
    console.log('Turning twice doesn‘t get you another gumball');
  }

  dispense(): void {
    this.gumballMachine.releaseBall();
    if (this.gumballMachine.getCount() > 0) {
      this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
    } else {
      console.log('Oops, out of gumball');
      this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
    }
  }
}