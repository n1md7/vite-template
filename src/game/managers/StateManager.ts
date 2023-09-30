import { AbstractState } from '/src/abstract/AbstractState';
import { State } from '/src/enums/state';
import { Game } from '/src/game/Game';
import { LoadState } from '/src/game/states/LoadState';
import { PlayState } from '/src/game/states/PlayState';

export class StateManager {
  private readonly states: Record<State, AbstractState>;

  private currentState: AbstractState;

  constructor(game: Game) {
    this.states = {
      [State.Load]: new LoadState(game),
      [State.Play]: new PlayState(game),
    };

    this.currentState = this.states[State.Load];
  }

  async update() {
    await this.currentState.update();
  }

  async changeState(state: State) {
    await this.currentState.deactivate();
    this.currentState = this.states[state];
    await this.currentState.activate();
  }
}
