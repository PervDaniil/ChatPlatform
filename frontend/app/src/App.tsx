import React from 'react';
import HomePage from './pages/HomePage.tsx';
import ChatPage from './pages/ChatPage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import RegisterPage from './pages/RegisterPage.tsx';
import AuthProvider from './providers/AuthProvider/AuthProvider.tsx';
import ThemeProvider from './providers/ThemeProvider/ThemeProvider.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WebsocketProvider from './providers/WebsocketProvider/WebsocketProvider.tsx';


export default function App() {
	return (
		<AuthProvider>
			<ThemeProvider>
				<Router>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/chat' element={<WebsocketProvider><ChatPage /></WebsocketProvider>} />
						<Route path='/login' element={<LoginPage />} />
						<Route path='/register' element={<RegisterPage />} />
					</Routes>
				</Router>
			</ThemeProvider>
		</AuthProvider>
	)
}