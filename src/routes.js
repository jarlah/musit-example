// @flow
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CounterPage from './pages/counter';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Route path="/" component={CounterPage} />
    </div>
  </BrowserRouter>
);

export default Routes;
