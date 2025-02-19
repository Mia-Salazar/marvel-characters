import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ReactQueryProvider } from './services/hooks/ReactQueryProvider.jsx';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactQueryProvider>
      <App />
    </ReactQueryProvider>
  </StrictMode>
);
