import React from 'react';
import ReactDOM from 'react-dom';
import App from './todolist/comp/app';

ReactDOM.render(<App />,
  document.getElementById('root')
);


if(module.hot){
  module.hot.accept();
}