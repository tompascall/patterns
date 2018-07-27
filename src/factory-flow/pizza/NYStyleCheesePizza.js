import Pizza from './Pizza';

export default class NYStyleCheesePizza extends Pizza {
  prepare() { console.log('prepare NYStyleCheese pizza') }
  bake() { console.log('bake NYStyleCheese pizza') }
  cut() { console.log('cut NYStyleCheese pizza') }
  box() { console.log('box NYStyleCheese pizza') }
}