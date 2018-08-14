// @flow

import AbstractGooseFactory from "./AbstractGooseFactory";
import GooseAdapter from "./GooseAdapter";
import Goose from "./Goose";

export default class DuckGooseFactory extends AbstractGooseFactory {
  createGoose() {
    return new GooseAdapter(new Goose());
  }
}