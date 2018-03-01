/*************import****************/
// import {fn} from './es6_import/import';
// import fn from './es6_import/import';
// import './index.css';
// let num = 10;
// console.log(num + fn()); //11

/***********react*****************/
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './reactDemo/app/app';
// import App from './reactDemo/app2/app';
// import App from './reactDemo/app3/app';
// import App from './reactDemo/app4/app2';
// import App from './reactDemo/app5/app';
import {Index as App}  from './todolist/Index';

ReactDOM.render(<App />,
  document.getElementById('root')
);


if(module.hot){
  module.hot.accept();
}