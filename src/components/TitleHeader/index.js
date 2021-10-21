import React from 'react'
import './styles.css'

import Heading from '../Heading'

export default function TitleHeader({ children, position, size }) {
	return (
		<div className={`TitleHeader ${position || 'left'}`}>
			<Heading size={size}>{children}</Heading>
		</div>
	)
}
