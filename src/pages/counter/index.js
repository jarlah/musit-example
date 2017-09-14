// @flow
import counterStore from './store';
import inject from 'react-rxjs/dist/RxInject';
import { CounterPage } from './view';

function props(props) {
  return {
    state: props.count,
    lastAction: props.lastAction,
    increase: counterStore.actions.increase,
    decrease: counterStore.actions.decrease
  };
}

export default inject(counterStore.store, props)(CounterPage);
