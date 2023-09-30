import { AbstractState } from '/src/abstract/AbstractState';

export class LoadState extends AbstractState {
  async activate() {
    await super.activate();
  }

  async deactivate() {
    await super.deactivate();
  }

  async update() {}
}
