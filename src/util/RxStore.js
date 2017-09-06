// @flow
import { Observable } from 'rxjs';

export function createStore<T>(
  reducer$: Observable<(T) => T>,
  initialState: T,
  keepAlive: boolean = false
): Observable<T> {
  const store = reducer$
    .scan((state, reducer) => reducer(state), initialState)
    .publishReplay(1)
    .refCount();
  if (keepAlive) {
    store.subscribe((d) => {
      console.log(d);
    });
  }
  return store;
}
