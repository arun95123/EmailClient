import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import Login from './components/Login';

const container = document.getElementById('page-container');
const root = createRoot(container);
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/email" element={<App/>} />
		</Routes>
	</BrowserRouter>
);
