import React from 'react';
import ChatPage from './pages/ChatPage.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<ChatPage />} />
			</Routes>
		</Router>
	)
}