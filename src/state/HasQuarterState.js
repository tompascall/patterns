// @flow

import type { State } from './State';
import GumballMachine from './GumballMachine';

export default class HasQuarterState implements State {
  gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  insertQuarter(): void {
    console.log('You cannot insert another quarter');
  }

  ejectQuarter(): void {
    console.log('Quarter returned');
    this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
  }

  turnCrank(): void {
    console.log('You turned');
    const winner = (Math.random() * 10) | 0;
    if (0 === winner) {
      this.gumballMachine.setState(this.gumballMachine.getWinnerState());
    } else {
      this.gumballMachine.setState(this.gumballMachine.getSoldState());
    }
  }

  dispense(): void {
    console.log('No gumball dispensed');
  }
}