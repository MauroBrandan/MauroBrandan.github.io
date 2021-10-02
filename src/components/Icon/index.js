import React from 'react'
import './styles.css'

export default function Icon({ children, size }) {
	return <img className={`Icon ${size}`} src={children}></img>
}
