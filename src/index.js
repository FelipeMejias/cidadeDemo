import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { App } from './App';

export const linhas=10
export const colunas=16

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);