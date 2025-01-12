import React from 'react';
import ChatPage from './pages/ChatPage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import ThemeProvider from './providers/ThemeProvider.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function App() {
	return (
		<ThemeProvider>
			<Router>
				<Routes>
					<Route path='/' element={<ChatPage />} />
					<Route path='/login' element={<LoginPage />} />
				</Routes>
			</Router>
		</ThemeProvider>
	)
}