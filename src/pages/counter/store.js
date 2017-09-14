// @flow
import { Observable, Subject } from 'rxjs';
import { createStore } from 'react-rxjs/dist/RxStore';

export type Number = { n: number };
export type StoreState = { count: number, lastAction: ?string };

export const increase$: Subject<Number> = new Subject();
export const decrease$: Subject<Number> = new Subject();

const reducer$ = (actions: *) =>
  Observable.merge(
    actions.increase$.map(number => state => ({
      lastAction: 'inc',
      count: state.count + number.n
    })),
    actions.decrease$.map(number => state => ({
      lastAction: 'dec',
      count: state.count - number.n
    }))
  );

const initialState: StoreState = { count: 0, lastAction: null };
export const storeFactory = (actions: *) =>
  createStore('counter', reducer$(actions), initialState);

export default {
  store: storeFactory({ increase$, decrease$ }),
  actions: {
    increase: (n: number) => increase$.next({ n }),
    decrease: (n: number) => decrease$.next({ n })
  }
};
