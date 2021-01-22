import React from 'react';
import ReactDOM from 'react-dom';
import  {GitHubProvider } from './GitHubBigProject/context'

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <GitHubProvider>
      <App />
    </GitHubProvider>
      
  
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
