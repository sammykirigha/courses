import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<h2>Learn react</h2>
			<Link to="/about">
				Learn
			</Link>
		</div>
	)
}

export default Home;