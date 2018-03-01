import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Suiji from './demo/js/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Suiji />, document.getElementById('root'));
registerServiceWorker();
