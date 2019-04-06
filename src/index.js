import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/Main.scss';
import App from './App/App.js';
import * as serviceWorker from './serviceWorker';
// import the library
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';


library.add(
  fab
);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
