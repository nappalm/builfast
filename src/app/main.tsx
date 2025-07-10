import React from 'react';
import ReactDOM from 'react-dom/client';
import { enableMocking } from '@/lib/msw/browser';
import Providers from './providers';

enableMocking().then(() => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error("Root element with id 'root' not found");
  }

  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Providers />
    </React.StrictMode>,
  );
});
