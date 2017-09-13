// @flow
import store$, { decrease$, increase$ } from './store';
import inject from 'react-rxjs/dist/RxInject';
import { CounterPage } from './view';

function props(state) {
  return {
    state,
    increase: n => increase$.next({ n }),
    decrease: n => decrease$.next({ n })
  };
}

export default inject(store$, props)(CounterPage);
