import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StartsFirebase } from './firebase/Firebase';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

StartsFirebase();