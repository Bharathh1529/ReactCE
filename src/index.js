import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';
const age=15;
var disp= <h2>{age > 18 ? "eligible": "not eligible"}</h2>

var vote
if(age>18)
vote="eligible"
else
vote="not eligible"

var eg1=<h1 style={{color:"blue"}}>I am BHarath</h1>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
