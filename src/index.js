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
  <BrowserRouter>
    <React.StrictMode>
      <HelmetProvider>
        <App tab="home" />
      </HelmetProvider>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals(sendToVercelAnalytics);
