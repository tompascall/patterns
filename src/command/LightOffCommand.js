// @flow

import { Command } from "./Command";
import Light from "./Light";

export default class LightOffCommand implements Command {
  light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute() {
    this.light.off();
  }
}
