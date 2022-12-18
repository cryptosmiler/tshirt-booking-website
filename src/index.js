import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/fonts/29LT.Zarid.Sans/29LTZaridSans-BlackSlanted.otf';
import './assets/fonts/29LT.Zarid.Sans/29LTZaridSans-BoldSlanted.otf';
import './assets/fonts/29LT.Zarid.Sans/29LTZaridSans-MediumSlanted.otf';
import './assets/fonts/29LT.Zarid.Sans/29LTZaridSans-LightSlanted.otf';
import './assets/fonts/29LT.Zarid.Sans/29LTZaridSans-ThinSlanted.otf';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
