import 'es6-shim';
import React from 'react';
import ReactDOM from 'react-dom';
import MusitRoutes from './routes';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';

ReactDOM.render(<MusitRoutes />, document.getElementById('content'));

window.React = React;
