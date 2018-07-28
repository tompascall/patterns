import NYStylePizzaStore from '../store/NYStylePizzaStore';
import NYStyleCheesePizza from '../pizza/NYStyleCheesePizza';
import NYStyleVeggiePizza from '../pizza/NYStyleVeggiePizza';
jest.mock('../pizza/NYStyleCheesePizza');
jest.mock('../pizza/NYStyleVeggiePizza');

import CAStylePizzaStore from '../store/CAStylePizzaStore';
import CAStyleCheesePizza from '../pizza/CAStyleCheesePizza';
import CAStyleVeggiePizza from '../pizza/CAStyleVeggiePizza';
jest.mock('../pizza/CAStyleCheesePizza');
jest.mock('../pizza/CAStyleVeggiePizza');

describe('NYStylePizzaStore', () => {
  beforeEach(() => {
    NYStyleCheesePizza.mockClear();
  });

  it('should use NYSTyleCheesePizza', () => {
    const store = new NYStylePizzaStore();
    const pizza = store.orderPizza('cheese');
    const [mockInstance] = NYStyleCheesePizza.mock.instances;
    expect(pizza).toEqual(mockInstance);
    expect(mockInstance.prepare).toHaveBeenCalled();
    expect(mockInstance.bake).toHaveBeenCalled();
    expect(mockInstance.cut).toHaveBeenCalled();
    expect(mockInstance.box).toHaveBeenCalled();
  });

  it('should use NYSTyleVeggiePizza', () => {
    const store = new NYStylePizzaStore();
    const pizza = store.orderPizza('veggie');
    const [mockInstance] = NYStyleVeggiePizza.mock.instances;
    expect(pizza).toEqual(mockInstance);
    expect(mockInstance.prepare).toHaveBeenCalled();
    expect(mockInstance.bake).toHaveBeenCalled();
    expect(mockInstance.cut).toHaveBeenCalled();
    expect(mockInstance.box).toHaveBeenCalled();
  });
});

describe('CAStylePizzaStore', () => {
  beforeEach(() => {
    CAStyleCheesePizza.mockClear();
  });

  it('should use CASTyleCheesePizza', () => {
    const store = new CAStylePizzaStore();
    const pizza = store.orderPizza('cheese');
    const [mockInstance] = CAStyleCheesePizza.mock.instances;
    expect(pizza).toEqual(mockInstance);
    expect(mockInstance.prepare).toHaveBeenCalled();
    expect(mockInstance.bake).toHaveBeenCalled();
    expect(mockInstance.cut).toHaveBeenCalled();
    expect(mockInstance.box).toHaveBeenCalled();
  });

  it('should use CASTyleVeggiePizza', () => {
    const store = new CAStylePizzaStore();
    const pizza = store.orderPizza('veggie');
    const [mockInstance] = CAStyleVeggiePizza.mock.instances;
    expect(pizza).toEqual(mockInstance);
    expect(mockInstance.prepare).toHaveBeenCalled();
    expect(mockInstance.bake).toHaveBeenCalled();
    expect(mockInstance.cut).toHaveBeenCalled();
    expect(mockInstance.box).toHaveBeenCalled();
  });
});