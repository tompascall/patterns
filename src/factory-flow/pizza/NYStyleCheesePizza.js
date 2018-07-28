import Pizza from './Pizza';

export default class NYStyleCheesePizza extends Pizza {
  constructor() {
    super();
    this.name = 'NY Style Sauce and Cheese Pizza';
    this.dough = 'Thin Crust Dough';
    this.sauce = 'Mariana Sauce';
    this.toppings = ['Grated Reggiano Cheese'];
  }
}
