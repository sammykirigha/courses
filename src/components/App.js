import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './about/AboutPage';
import Home from './home/HomePage';


const App = () => {
	return (
		<div style={{ backgroundColor: 'red' }}>
			<Routes>
               <Route path='/' element={<Home />} />
			<Route path='/about' element={<AboutPage />} />
			</Routes>
			
		</div>
	)
}

export default App