import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@/components/App/App';
import '../static/css/main.scss';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}
