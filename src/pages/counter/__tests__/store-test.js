// @flow
import { store } from '../store';
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
      a: 0,
      b: 1,
      c: 2,
      d: 1,
      e: 0,
      f: -1,
      g: 0,
      h: 1
    };
    ts
      .expectObservable(store({ increase$, decrease$ }))
      .toBe(streams.res, expectedResultMap);
    ts.flush();
  });
});
