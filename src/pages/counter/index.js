import React from 'react';
import type { CounterState } from './store';

export type Props = {
  state: CounterState
};

export default function CounterPage(props: Props) {
  return (
    <div className="container">
      <h1>Counter</h1>
      <p>{props.state}</p>
    </div>
  );
}
