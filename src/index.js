import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <HelmetProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App tab="home" />
      </React.StrictMode>
    </BrowserRouter>
  </HelmetProvider>
);

reportWebVitals(sendToVercelAnalytics);
