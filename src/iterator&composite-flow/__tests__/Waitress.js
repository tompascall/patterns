import Waitress from '../Waitress';

describe('Waitress', () => {
  it('should print menus without error', () => {
    expect((new Waitress().print()));
  });
});
