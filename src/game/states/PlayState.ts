import { AbstractState } from '/src/abstract/AbstractState';

export class PlayState extends AbstractState {
  async activate() {
    await super.activate();
  }

  async deactivate() {
    await super.deactivate();
  }

  async update() {}
}
