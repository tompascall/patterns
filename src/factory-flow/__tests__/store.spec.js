import NYStylePizzaStore from '../store/NYStylePizzaStore';
import CAStylePizzaStore from '../store/CAStylePizzaStore';
import CheesePizza from '../pizza/CheesePizza';
import ClamPizza from '../pizza/ClamPizza';
import NYPizzaIngredientFactory from '../ingredient/NYPizzaIngredientFactory';
import CAPizzaIngredientFactory from '../ingredient/CAPizzaIngredientFactory';
import Pizza from '../pizza/Pizza';
jest.mock('../pizza/Pizza');

describe('pizza store', () => {
  describe('NYStylePizzaStore', () => {

    describe('CheesePizza', () => {
      it('should be cheese pizza', () => {
        const store = new NYStylePizzaStore();
        const pizza = store.orderPizza('cheese');
        expect(pizza instanceof CheesePizza).toBe(true);
      });

      it('should call Pizza bake, cut, box method', () => {
        Pizza.mockClear();
        const store = new NYStylePizzaStore();
        const pizza = store.orderPizza('cheese');
        const [mockInstance] = Pizza.mock.instances;
        expect(mockInstance.bake).toHaveBeenCalled();
        expect(mockInstance.cut).toHaveBeenCalled();
        expect(mockInstance.box).toHaveBeenCalled();
      });

      it('should create NY style ingredients', () => {
        const store = new NYStylePizzaStore();
        const pizza = store.orderPizza('cheese');
        const NYPizzaIngredients = new NYPizzaIngredientFactory();
        expect(pizza.dough).toEqual(NYPizzaIngredients.createDough());
        expect(pizza.sauce).toEqual(NYPizzaIngredients.createSauce());
        expect(pizza.cheese).toEqual(NYPizzaIngredients.createCheese());
      });
    });

    describe('ClamPizza', () => {
      it('should be cheese pizza', () => {
        const store = new NYStylePizzaStore();
        const pizza = store.orderPizza('clam');
        expect(pizza instanceof ClamPizza).toBe(true);
      });

      it('should create NY style ingredients', () => {
        const store = new NYStylePizzaStore();
        const pizza = store.orderPizza('clam');
        const NYPizzaIngredients = new NYPizzaIngredientFactory();
        expect(pizza.dough).toEqual(NYPizzaIngredients.createDough());
        expect(pizza.sauce).toEqual(NYPizzaIngredients.createSauce());
        expect(pizza.cheese).toEqual(NYPizzaIngredients.createCheese());
        expect(pizza.clam).toEqual(NYPizzaIngredients.createClam());
      });
    });
  });

  describe('CAStylePizzaStore', () => {

    describe('CheesePizza', () => {
      it('should be cheese pizza', () => {
        const store = new CAStylePizzaStore();
        const pizza = store.orderPizza('cheese');
        expect(pizza instanceof CheesePizza).toBe(true);
      });

      it('should create CA style ingredients', () => {
        const store = new CAStylePizzaStore();
        const pizza = store.orderPizza('cheese');
        const CAPizzaIngredients = new CAPizzaIngredientFactory();
        expect(pizza.dough).toEqual(CAPizzaIngredients.createDough());
        expect(pizza.sauce).toEqual(CAPizzaIngredients.createSauce());
        expect(pizza.cheese).toEqual(CAPizzaIngredients.createCheese());
      });
    });

    describe('ClamPizza', () => {
      it('should be cheese pizza', () => {
        const store = new CAStylePizzaStore();
        const pizza = store.orderPizza('clam');
        expect(pizza instanceof ClamPizza).toBe(true);
      });

      it('should create CA style ingredients', () => {
        const store = new CAStylePizzaStore();
        const pizza = store.orderPizza('clam');
        const CAPizzaIngredients = new CAPizzaIngredientFactory();
        expect(pizza.dough).toEqual(CAPizzaIngredients.createDough());
        expect(pizza.sauce).toEqual(CAPizzaIngredients.createSauce());
        expect(pizza.cheese).toEqual(CAPizzaIngredients.createCheese());
        expect(pizza.clam).toEqual(CAPizzaIngredients.createClam());
      });
    });
  });
});