// @flow
import counterStore from './store';
import { inject } from 'react-rxjs';
import { CounterPage } from './view';

const { store, actions } = counterStore;
const { increase, decrease } = actions;

function props(storeState) {
  return {
    count: storeState.count,
    lastAction: storeState.lastAction,
    increase,
    decrease
  };
}

export default inject(store, props)(CounterPage);
