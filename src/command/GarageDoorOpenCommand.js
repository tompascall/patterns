// @flow
import { Command } from "./Command";
import GarageDoor from "./GarageDoor";

export default class GarageDoorOpenCommand implements Command {
  garageDoor: GarageDoor;

  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor;
  }

  execute() {
    this.garageDoor.up();
  }
}