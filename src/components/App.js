import React from 'react';
import { Route } from 'react-router-dom';
import AboutPage from './about/AboutPage';
import Home from './home/HomePage';


const App = () => {
	return (
		<div>
			<Route path='/' element={<Home />} />
			<Route path='/about' element={<AboutPage />} />
		</div>
	)
}

export default App