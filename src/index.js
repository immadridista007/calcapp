import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Head from './Head';
//import Calculator from './Calculator';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Head />, document.getElementById('root'));
//ReactDOM.render(<Calculator /> , document.getElementById('root'));
registerServiceWorker();
