import { Command } from "./Command";

// @flow

export default class SimpleRemoteControl {
  slot: Command;

  setCommand(command: Command) {
    this.slot = command;
  }

  buttonWasPressed() {
    this.slot.execute();
  }
}