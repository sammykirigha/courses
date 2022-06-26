import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
	const Activestyles = {
		color: 'red'
	}

	return (
		<nav className='navbar'>
			<NavLink to="/" style={{Activestyles}} className={({ isActive }) => isActive ? 'ActiveStyle' : 'navItem'}>Home</NavLink>
			<NavLink to="/courses" className={({ isActive }) => isActive ? 'ActiveStyle' : 'navItem'} >Courses</NavLink>
			<NavLink to="/about" className={({ isActive }) => isActive ? 'ActiveStyle' : 'navItem'} >About</NavLink>
		</nav>
	)
}

export default Header;