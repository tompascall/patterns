import { Quackable } from "./Quackable";

// @flow

export default class RubberDuck implements Quackable {
  quack() {
    console.log('Squeak');
  }
}