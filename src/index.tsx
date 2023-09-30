import { Main } from '/src/Main';
import { render } from 'solid-js/web';
import env from './utils/Env';

console.info('Is development mode:', env.isDevelopment());

render(() => <Main />, document.body);
