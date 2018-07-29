import HeavyClass from './HeavyClass';

let isInstantiated;
let instance;

class SingletonHeavyClass {
  static getInstance() {
    if (!isInstantiated) {
      isInstantiated = true;
      instance = new HeavyClass();
    }
    return instance;
  };

  constructor() {
    throw new Error('singleton, instantiate it with getInstance static class method');
  }
}

export default SingletonHeavyClass;