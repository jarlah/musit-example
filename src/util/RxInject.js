// @flow
import React from 'react';
import { Observable, Subscription } from 'rxjs';

export type Injector<ComponentProps, UpstreamProps> = (
  Component: React$ComponentType<ComponentProps>
) => React$ComponentType<UpstreamProps>;

export type PropsType<ComponentProps, StoreProps, UpstreamProps> = (
  store: StoreProps,
  upstream: UpstreamProps
) => ComponentProps | ComponentProps;

export default function inject<ComponentProps, StoreProps, UpstreamProps>(
  store: Observable<StoreProps>,
  props: PropsType<ComponentProps, StoreProps, UpstreamProps>
): Injector<ComponentProps, UpstreamProps> {
  return (Component: React$ComponentType<ComponentProps>) => {
    type State = { store: StoreProps };
    class Inject extends React.Component<UpstreamProps, State> {
      state: State;
      subscription: Subscription;

      componentDidMount() {
        this.subscription = store.subscribe(storeProps => {
          this.setState({ store: storeProps });
        });
      }

      componentWillUnmount() {
        this.subscription.unsubscribe();
      }

      render() {
        if (!this.state) {
          return null;
        }
        const customProps =
          typeof props === 'function' ? props(this.state.store, this.props) : props;
        return <Component {...(customProps: any)} />;
      }
    }
    return Inject;
  };
}
