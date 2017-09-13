// @flow
import { Observable, Subject } from 'rxjs';
import { createStore } from 'react-rxjs/dist/RxStore';

type Number = { n: number };

export const increase$: Subject<Number> = new Subject();
export const decrease$: Subject<Number> = new Subject();

const reducer$ = (actions: *) => Observable.merge(
  actions.increase$.map(number => state => state + number.n),
  actions.decrease$.map(number => state => state - number.n)
);

export const store = (actions: *) => createStore('counter', reducer$(actions), 0);

export default store({ increase$, decrease$ });
