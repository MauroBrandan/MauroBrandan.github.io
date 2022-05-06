import React from 'react'
import Heading from '../Heading'
import './styles.css'

export default function ProjectCard({ children, image, btnlink }) {
	return (
		<div className='ProjectCard' style={{ backgroundImage: `url(${image})` }}>
			<a href={btnlink} className='ProjectCard__info'>
				<div>
					<Heading size={'small'}>{children}</Heading>
				</div>
			</a>
		</div>
	)
}
