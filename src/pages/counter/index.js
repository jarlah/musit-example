// @flow
import React from 'react';
import store$, { decrease$, increase$ } from './store';
import inject from '../../util/RxInject';

export type Props = {
  state: number,
  increase: () => mixed,
  decrease: () => mixed
};

export const CounterPage = (props: Props) => {
  return (
    <div className="container">
      <h1>Counter</h1>
      <p>{props.state}</p>
      <button onClick={props.increase}>+</button>
      <button onClick={props.decrease}>-</button>
    </div>
  );
};

export default inject(store$, (state, upstream) => ({
  state,
  increase: () => increase$.next(),
  decrease: () => decrease$.next()
}))(CounterPage);
