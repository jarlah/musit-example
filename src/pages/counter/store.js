// @flow
import { Observable, Subject } from 'rxjs';
import { createStore } from '../../util/RxStore';

export const increase$: Subject<void> = new Subject();
export const decrease$: Subject<void> = new Subject();

const reducer$ = Observable.merge(
  increase$.map(() => state => ++state),
  decrease$.map(() => state => --state)
);

export default createStore(reducer$, 0);
