import { Quackable } from "./Quackable";

// @flow

export default class ReadheadDuck implements Quackable {
  quack() {
    console.log('Quack');
  }
}