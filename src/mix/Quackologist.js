import { Observer } from "./Observer";
import { QuackObservable } from "./QuackObservable";

export default class Quackologist implements Observer {
  update(duck: QuackObservable) {
    console.log(`Quackologist: ${duck.name} just quacked`);
  }
}