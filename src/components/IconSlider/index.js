import React from 'react'
import './styles.css'

export default function IconSlider({ children }) {
	return (
		<div className='IconSlider'>
			<div className='IconSlider__wrapper'>{children}</div>
		</div>
	)
}
