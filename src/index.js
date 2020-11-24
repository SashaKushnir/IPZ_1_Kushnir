import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rstore from './components/rstore/rstore'

const toRend = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state = {rstore.getState()} dispatch = {rstore.dispatch}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

toRend()

rstore.subscribe(toRend)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
