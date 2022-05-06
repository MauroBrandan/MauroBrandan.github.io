import React from 'react'
import './styles.css'

import Heading from '../Heading'

export default function TitleHeader({ children, position, size, theme }) {
	return (
		<div className={`TitleHeader ${position || 'left'} ${theme || ''}`}>
			<Heading size={size}>{children}</Heading>
		</div>
	)
}
