import { State } from '/src/enums/state';
import { StateManager } from '/src/game/managers/StateManager';

export class Game {
  state: StateManager;

  constructor() {
    this.state = new StateManager(this);
  }

  async init() {
    console.log('Game initialized');
    await this.state.changeState(State.Load);
  }

  async start() {
    console.log('Game started');
  }

  async stop() {
    console.log('Game stopped');
  }

  async destroy() {
    console.log('Game destroyed');
  }
}
