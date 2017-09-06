// @flow
import { Observable, Subject } from 'rxjs';
import { createStore } from '../../util/RxStore';

export type CounterState = number;

export const increase$ = new Subject();
export const decrease$ = new Subject();

type Action = { type: string, payload?: ?any };

const reduce = (action: Action) => (state: CounterState): CounterState => {
  switch (action.type) {
    case 'increase':
      return state + 1;

    case 'decrease':
      return state - 1;

    default:
      return state;
  }
};

const reducer$ = Observable.merge(
  increase$.mapTo({ type: 'increase' }),
  decrease$.mapTo({ type: 'decrease' })
).map(reduce);

export default createStore(reducer$, 0);
