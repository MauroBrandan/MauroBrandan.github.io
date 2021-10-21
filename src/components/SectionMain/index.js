import React from 'react'
import './styles.css'

import TitleHeader from '../TitleHeader'
import Button from '../Button'

export default function SectionMain({ children, title }) {
	return (
		<section className='SectionMain'>
			<TitleHeader>{title}</TitleHeader>
			<div className='children-container'>{children}</div>
			<Button>Ver más</Button>
		</section>
	)
}
