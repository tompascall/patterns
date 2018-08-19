import SimpleRemoteControl from './SimpleRemoteControl';
import LightOnCommand from './LightOnCommand';
import Light from './Light';
import GarageDoorOpenCommand from './GarageDoorOpenCommand';
import GarageDoor from './GarageDoor';

describe('SimpleRemoteControl', () => {
  describe('When we set command on SimpleRemoteControl and press button', () => {
    it('should execute command', () => {
      const remote = new SimpleRemoteControl();
      const command = new LightOnCommand(new Light());
      jest.spyOn(command, 'execute');
      remote.setCommand(command);
      remote.buttonWasPressed();
      expect(command.execute).toHaveBeenCalled();
    });
  });

  describe('GarageDoorOpenCommand', () => {
    it('should call up on garageDoor', () => {
      const garageDoor = new GarageDoor();
      jest.spyOn(garageDoor, 'up');
      const command = new GarageDoorOpenCommand(garageDoor);
      command.execute();
      expect(garageDoor.up).toHaveBeenCalled();
    });
  });
});