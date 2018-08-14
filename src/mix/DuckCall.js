import { Quackable } from "./Quackable";

// @flow

export default class DuckCall implements Quackable {
  quack() {
    console.log('Kwak');
  }
}