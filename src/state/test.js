import GumballMachine from './GumballMachine';

describe('Gumball demo', () => {
  it('should log gumball process', () => {
    const gumballMachine = new GumballMachine(5);
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    console.log('Number of balls', gumballMachine.getCount());
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    console.log('Number of balls', gumballMachine.getCount());
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    console.log('Number of balls', gumballMachine.getCount());
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    console.log('Number of balls', gumballMachine.getCount());
  });
});