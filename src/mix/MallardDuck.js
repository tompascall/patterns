import { Quackable } from "./Quackable";

// @flow

export default class MallardDuck implements Quackable {
  quack() {
    console.log('Quack');
  }
}
