import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import { StartsFirebase } from './firebase/Firebase';

const messaging = StartsFirebase();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/firebase-messaging-sw.js')
    .then((registration) => {
      messaging.useServiceWorker(registration);
      console.log('Service Worker registered with Firebase Messaging.');
    })
    .catch((error) => {
      console.error('Error registering Service Worker:', error);
    });
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
