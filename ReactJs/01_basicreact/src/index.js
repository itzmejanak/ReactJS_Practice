import React from 'react';
//react dom is the implementation of the web same like reactNative is the implementation of the mobile apps
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

