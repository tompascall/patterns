import NYStylePizzaStore from '../store/NYStylePizzaStore';
import NYStyleCheesePizza from '../pizza/NYStyleCheesePizza';
jest.mock('../pizza/NYStyleCheesePizza');

describe('NYStylePizzaStore', () => {
  beforeEach(() => {
    NYStyleCheesePizza.mockClear();
  });

  it('should instantiate store', () => {
    const store = new NYStylePizzaStore();
    const pizza = store.orderPizza('cheese');
    const [mockInstance] = NYStyleCheesePizza.mock.instances;
    expect(pizza).toEqual(mockInstance);
    expect(mockInstance.prepare).toHaveBeenCalled();
    expect(mockInstance.bake).toHaveBeenCalled();
    expect(mockInstance.cut).toHaveBeenCalled();
    expect(mockInstance.box).toHaveBeenCalled();
  });
});