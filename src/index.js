import React from 'react';
import { render } from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import Routes from './routes';

window.React = React;
render(
    <Routes />, document.getElementById('root'),
);
