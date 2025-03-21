import { createRoot } from 'react-dom/client';

import './style.css';
import { StrictMode } from 'react';
import { App } from './app';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<StrictMode>
    <App />
  </StrictMode>);
}