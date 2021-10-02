import React from 'react'
import Heading from '../Heading'
import Button from '../Button'
import './styles.css'

export default function ProjectCard({ children, image }) {
	return (
		<div className='ProjectCard' style={{ backgroundImage: `url(${image})` }}>
			<div className='ProjectCard__info'>
				<Heading size={'small'}>{children}</Heading>
				<Button>Ver proyecto</Button>
			</div>
		</div>
	)
}
