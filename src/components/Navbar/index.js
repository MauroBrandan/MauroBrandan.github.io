import React from 'react'
import './styles.css'
import Logo from '../../assets/static/images/logo.png'

export default function Navbar() {
	return (
		<nav className='Navbar'>
			<div className='logo'>
				<a href='/#'>
					<img src={Logo} alt='Logo Mauro Brandan' />
				</a>
			</div>
			<ul>
				<a href='/#'>
					<li>Home</li>
				</a>
				<a href='/#Proyectos'>
					<li>Proyectos</li>
				</a>
				<a href='/#Contacto'>
					<li>Contacto</li>
				</a>
			</ul>
		</nav>
	)
}
