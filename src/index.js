import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/Main.scss';
import App from './App/App.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
