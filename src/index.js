import 'es6-shim';
import React from 'react';
import ReactDOM from 'react-dom';
import MusitRoutes from './routes';
import LanguageJson from './language.json';
import { I18n } from 'react-i18nify';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';

I18n.loadTranslations(LanguageJson);
I18n.setLocale('no');

ReactDOM.render(<MusitRoutes />, document.getElementById('content'));

window.React = React;
