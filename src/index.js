import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Workbox } from 'workbox-window';

const root = ReactDOM.createRoot(document.getElementById('root'));
if ('serviceWorker' in navigator) {
  const wb = new Workbox('/company/sw.js');

  wb.register().then((registration) => {
    console.log('Registration success', registration.scope);
  }).catch((err) => {
    console.log('Registration failed', err);
  });
}
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
