// @flow
import React from 'react';
import type { CounterState } from './store';
import store$, { decrease$, increase$ } from './store';
import inject from 'react-rxjs/dist/RxInject';

const data = {
  store$
};

const commands = {
  increase$,
  decrease$
};

export type Props = {
  store: CounterState,
  increase: () => void,
  decrease: () => void
};

export function CounterPage(props: Props) {
  return (
    <div className="container">
      <h1>Counter</h1>
      <p>{props.store}</p>
      <button onClick={props.increase}>+</button>
      <button onClick={props.decrease}>-</button>
    </div>
  );
}

export default inject(data, commands)(CounterPage);
