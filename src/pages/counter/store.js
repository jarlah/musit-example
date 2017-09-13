// @flow
import { Observable, Subject } from 'rxjs';
import { createStore } from 'react-rxjs/dist/RxStore';

type Number = { n: number };

export const increase$: Subject<Number> = new Subject();
export const decrease$: Subject<Number> = new Subject();

const reducer$ = Observable.merge(
  increase$.map(number => state => state + number.n),
  decrease$.map(number => state => state - number.n)
);

export default createStore('counter', reducer$, 0);
