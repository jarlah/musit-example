// @flow
import { Observable } from 'rxjs';

export function createStore<State>(
  reducer$: Observable<(state: State) => State>,
  initialState$: State,
  keepAlive: boolean = false
): Observable<State> {
  const store = reducer$
    .scan((state, reducer) => reducer(state), initialState$)
    .publishReplay(1)
    .refCount();
  if (keepAlive) {
    store.subscribe(() => {});
  }
  return store;
}
