import React from 'react'
import './styles.css'

export default function Heading({ children, size }) {
	return <p className={`Heading size-${size}`}>{children}</p>
}
