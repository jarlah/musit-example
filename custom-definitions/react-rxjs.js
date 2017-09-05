import type { Observable } from 'rxjs';

declare module 'react-rxjs/dist/RxStore' {
  declare export function createAction<T>(name: string): Observable<T>;
  declare export function createStore<T>(name: string, reducer: Observable<(state: T) => T>, initialState: Observable<T>): Observable<T>;
}