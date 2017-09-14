// @flow
import { storeFactory as store } from '../store';
import { TestScheduler } from 'rxjs/Rx';

describe('counter store', () => {
  it('increase and decrease', () => {
    const ts = new TestScheduler((a, b) => expect(a).toEqual(b));

    const streams = {
      inc: '-ab----cd',
      dec: '---ab-c--',
      res: 'abcde-fgh'
    };

    const n = { n: 1 };
    const increase$ = ts.createHotObservable(streams.inc, { a: n, b: n, c: n, d: n });
    const decrease$ = ts.createHotObservable(streams.dec, { a: n, b: n, c: n });
    const expectedResultMap = {
      a: {count: 0, lastAction: null},
      b: {count: 1, lastAction: 'inc'},
      c: {count: 2, lastAction: 'inc'},
      d: {count: 1, lastAction: 'dec'},
      e: {count: 0, lastAction: 'dec'},
      f: {count: -1, lastAction: 'dec'},
      g: {count: 0, lastAction: 'inc'},
      h: {count: 1, lastAction: 'inc'}
    };
    ts
      .expectObservable(store({ increase$, decrease$ }))
      .toBe(streams.res, expectedResultMap);
    ts.flush();
  });
});
