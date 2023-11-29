import React from 'react';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<h1>Hello, dev.vshevchuk.ru!!!!!!!</h1>);
}