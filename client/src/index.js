//npm install axios moment react-file-base64 redux redux-thunk --force 
//npm install @material-ui/core be carefull to be in the client side to install this
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from './react-redux'; //Access store from App

ReactDOM.render(
    <App />,
  document.getElemeppntById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
