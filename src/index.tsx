import React from 'react';
import ReactDOM from 'react-dom/client';
import { RunApp } from './App';
import GlobalProvider from './components/context/GlobalProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalProvider>
      <RunApp />
    </GlobalProvider>
  </React.StrictMode>
);
