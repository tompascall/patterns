import Pizza from './Pizza';

export default class CAStyleCheesePizza extends Pizza {
  constructor() {
    super();
    this.name = 'California Style Deep Dish Cheese Pizza';
    this.dough = 'Extra Thick Crust Dough';
    this.sauce = 'Plum Tomato Sauce';
    this.toppings = ['Shredded Mozzarella Cheese'];
  }

  cut() {
    console.log('Cutting the pizza into square slices');
  }
}