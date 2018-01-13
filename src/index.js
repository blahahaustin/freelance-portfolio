import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './utilities/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();