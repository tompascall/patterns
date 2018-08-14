
// @flow

import type { State } from './State';
import GumballMachine from './GumballMachine';

export default class WinnerState implements State {
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
    if (0 === this.gumballMachine.getCount()) {
      this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
    } else {
      this.gumballMachine.releaseBall();
      console.log('You are a WINNER! You got 2 gumballs for your quarter');
      if (0 < this.gumballMachine.getCount()) {
        this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
      } else {
        console.log('Oops, out of gumballs!');
        this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
      }
    }
  }
}