import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';

const body = document.querySelector('body');
const root = document.createElement('div');
root.id = 'root';
body.appendChild(root);

createRoot(document.getElementById('root')).render(<App />);
