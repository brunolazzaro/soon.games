import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

// SW
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Render
ReactDOM.render(<App />, document.getElementById('root'));
