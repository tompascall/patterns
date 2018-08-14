import { QuackObservable } from "./QuackObservable";

// @flow

export interface Observer {
  update(duck: QuackObservable): void;
}