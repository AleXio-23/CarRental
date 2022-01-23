import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  Switch,
  Route,
  Link,
  Routes,
  Router,
  BrowserRouter
  
} from "react-router-dom";
import Login from './Components/Content/Authorization/Login';

ReactDOM.render(
  <React.StrictMode>
     
    <BrowserRouter>
      <App />
    </BrowserRouter>
     
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
