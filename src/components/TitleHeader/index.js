import React from 'react'
import Heading from '../Heading'
import './styles.css'

export default function TitleHeader({ children, position, size }) {
	return (
		<div className={`TitleHeader ${position}`}>
			<Heading size={size}>{children}</Heading>
		</div>
	)
}
