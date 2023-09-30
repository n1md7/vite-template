import { Game } from '/src/game/Game';
import { createEffect } from 'solid-js';

export function Main() {
  const game = new Game();

  createEffect(() => {
    game.init();

    return () => game.destroy();
  });

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}
