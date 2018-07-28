import Pizza from './Pizza';

export default class CAStyleVeggiePizza extends Pizza {
  prepare() { console.log('prepare CAStyleVeggiePizza pizza') }
  bake() { console.log('bake CAStyleVeggiePizza pizza') }
  cut() { console.log('cut CAStyleVeggiePizza pizza') }
  box() { console.log('box CAStyleVeggiePizza pizza') }
}