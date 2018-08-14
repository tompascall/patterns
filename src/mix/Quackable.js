import { QuackObservable } from "./QuackObservable";

// @flow

export interface Quackable extends QuackObservable {
  quack(): void
}
