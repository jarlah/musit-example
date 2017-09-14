// @flow
import React from 'react';

export type Props = {
  count: number,
  lastAction: ?string,
  increase: (n: number) => mixed,
  decrease: (n: number) => mixed
};

export function CounterPage(props: Props) {
  return (
    <div className="container">
      <h1>Counter</h1>
      <p>{props.count}</p>
      <button onClick={() => props.increase(1)}>+</button>
      <button onClick={() => props.decrease(1)}>-</button>
      <div>{props.lastAction}</div>
    </div>
  );
}
