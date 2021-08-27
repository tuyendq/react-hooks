import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const [, , third] = ['Tom', 'Jerry', 'Alvin'];

console.log(third);

ReactDOM.render(
  <React.StrictMode>
    <App name='React' />
  </React.StrictMode>,
  document.getElementById('root')
);
