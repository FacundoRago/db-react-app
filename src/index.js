import React from 'react';
import { hydrate, render } from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');
if (root.hasChildNodes()) {
  hydrate(<App />, root);
}
else {
  render(<App />, root)
}

reportWebVitals();