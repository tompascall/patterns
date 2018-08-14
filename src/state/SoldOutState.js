
// @flow

import type { State } from './State';
import GumballMachine from './GumballMachine';

export default class SoldOutState implements State {
  gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  insertQuarter(): void {
    console.log('You cannot insert a quarter, machine is sold out');
  }

  ejectQuarter(): void {
    console.log('You cannot eject, you haven‘t inserted a quarter yet');
  }

  turnCrank(): void {
    console.log('You turned, but there are no gumballs');
  }

  dispense(): void {
    console.log('No gumball dispensed');
  }
}