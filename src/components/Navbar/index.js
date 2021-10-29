import React from 'react'
import './styles.css'

export default function Navbar() {
	return (
		<nav className='Navbar'>
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
