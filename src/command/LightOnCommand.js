// @flow

import { Command } from "./Command";
import Light from "./Light";

export default class LightOnCommand implements Command {
  light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute() {
    this.light.on();
  }
}
