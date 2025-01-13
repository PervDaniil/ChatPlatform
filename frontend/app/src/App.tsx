import React from 'react';
import ChatPage from './pages/ChatPage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import RegisterPage from './pages/RegisterPage.tsx';
import AuthProvider from './providers/AuthProvider/AuthProvider.tsx';
import ThemeProvider from './providers/ThemeProvider/ThemeProvider.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function App() {
	return (
		<AuthProvider>
			<ThemeProvider>
				<Router>
					<Routes>
						<Route path='/' element={<ChatPage />} />
						<Route path='/login' element={<LoginPage />} />
						<Route path='/register' element={<RegisterPage />} />
					</Routes>
				</Router>
			</ThemeProvider>
		</AuthProvider>
	)
}