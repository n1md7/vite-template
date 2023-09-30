import { AbstractState } from '/src/abstract/AbstractState';
import { State } from '/src/enums/state';

export class LoadState extends AbstractState {
  async activate() {
    await super.activate();

    // TODO: Load assets

    await this.game.state.changeState(State.Play);
  }

  async deactivate() {
    await this.game.start();
    await super.deactivate();
  }

  async update() {}
}
