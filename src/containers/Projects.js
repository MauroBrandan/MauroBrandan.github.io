import React from 'react'
import '../assets/styles/Projects.css'

import TitleHeader from '../components/TitleHeader'

function Projects({ children }) {
	return (
		<section className='Projects'>
			<TitleHeader position='center' size='big'>
				Proyectos
			</TitleHeader>
			{children}
		</section>
	)
}

export default Projects
