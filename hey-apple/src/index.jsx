import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import useEffect from 'react';
import { useLocation } from "react-router-dom";
import ScrollTop from './components/ScrollTop';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollTop/>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
