// @flow
import { Observable } from 'rxjs';
import { createStore, createAction } from 'react-rxjs/dist/RxStore';

export type CounterState = number;

export const increase$ = createAction('increase$');
export const decrease$ = createAction('decrease$');

const actions$ = Observable.merge(
  increase$.mapTo({ type: 'increase' }),
  decrease$.mapTo({ type: 'decrease' })
);

export const reducer$ = actions$.map((action: { type: string }) => (
  state: CounterState
): CounterState => {
  switch (action.type) {
    case 'increase':
      return state + 1;

    case 'decrease':
      return state - 1;

    default:
      return state;
  }
});

export const counterStore$: Observable<CounterState> = createStore(
  'counterStore$',
  reducer$,
  Observable.of(0)
);

export default counterStore$;
