import Pizza from './Pizza';

export default class NYStyleVeggiePizza extends Pizza {
  prepare() { console.log('prepare NYStyleVeggiePizza pizza') }
  bake() { console.log('bake NYStyleVeggiePizza pizza') }
  cut() { console.log('cut NYStyleVeggiePizza pizza') }
  box() { console.log('box NYStyleVeggiePizza pizza') }
}