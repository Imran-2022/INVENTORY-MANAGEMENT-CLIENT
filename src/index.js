import React from 'react';
import ReactDOM from 'react-dom/client';
import './common.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { ScrollToTop } from './Helpers/Index';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ScrollToTop />
      <App />
    </React.StrictMode>
  </BrowserRouter>
);