import { Quackable } from "./Quackable";
import Goose from "./Goose";

// @flow

export default class GooseAdapter implements Quackable {
  goose: Goose;

  constructor(goose: Goose) {
    this.goose = goose;
  }

  quack() {
    this.goose.honk();
  }
}