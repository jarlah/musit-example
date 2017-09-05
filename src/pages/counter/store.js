// @flow
import { Observable, Subject } from 'rxjs';
import { createStore, createAction } from 'react-rxjs/dist/RxStore';

export type CounterState = number;

const initialState: CounterState = 0;

export const increase$: Subject<void> = createAction('increase$');
export const decrease$: Subject<void> = createAction('decrease$');

export const reducer$: Observable<
  (state: CounterState) => CounterState
> = Observable.merge(
  increase$.map(() => (state: CounterState) => --state),
  decrease$.map(() => (state: CounterState) => ++state)
);

export const counterStore$: Observable<CounterState> = createStore(
  'counterStore$',
  reducer$,
  Observable.of(initialState)
);

export default counterStore$;
