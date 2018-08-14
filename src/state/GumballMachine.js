import NoQuarterState from "./NoQuarterState";
import SoldOutState from "./SoldOutState";
import HasQuarterState from "./HasQuarterState";
import SoldState from "./SoldState";
import WinnerState from "./WinnerState";

export default class GumballMachine {
  noQuarterState: NoQuarterState;
  soldOutState: SoldOutState;
  hasQuarterState: HasQuarterState;
  soldState: SoldState;
  winnerState: WinnerState;
  state: State;
  count: number;

  constructor (numberGumballs: number) {
    this.noQuarterState = new NoQuarterState(this);
    this.soldOutState = new SoldOutState(this);
    this.hasQuarterState = new HasQuarterState(this);
    this.soldState = new SoldState(this);
    this.winnerState = new WinnerState(this);

    this.count = numberGumballs;
    if (0 < numberGumballs) {
      this.state = this.noQuarterState;
    } else {
      this.state = this.soldOutState;
    }
  }

  getNoQuarterState() { return this.noQuarterState; }
  getHasQuarterState() { return this.hasQuarterState; }
  getSoldState() { return this.soldState; }
  getSoldOutState() { return this.soldOutState; }
  getWinnerState() { return this.winnerState; }

  insertQuarter() {
    this.state.insertQuarter();
  }

  ejectQuarter() {
    this.state.ejectQuarter();
  }

  turnCrank() {
    this.state.turnCrank();
    this.state.dispense();
  }

  setState(state: State) {
    this.state = state;
  }

  releaseBall() {
    console.log('A gumball comes rolling out the slot...');
    if (0 !== this.count) this.count--;
  }

  getCount() {
    return this.count;
  }
}
