import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

const container = document.getElementById('page-container');
const root = createRoot(container);
root.render(<App email='emma@hogwarts.com'/>);
