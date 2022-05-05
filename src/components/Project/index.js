import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import './styles.css'

import TitleHeader from '../TitleHeader'
import Icon from '../Icon'
import Button from '../Button'

export default function Project({ id, title, img, icons, children, links }) {
	return (
		<section className='Project' id={id}>
			<TitleHeader>{title}</TitleHeader>
			<LazyLoadImage className='Project__img' src={img} alt={title} effect='blur' />
			<div className='Project__info'>
				<div className='Project__stack'>
					{icons.map((icon) => (
						<Icon size='small' key={icon}>
							{icon}
						</Icon>
					))}
				</div>
				<p className='Project__descriprion'>{children}</p>
				<div className='Project__buttons'>
					<a href={links[0]} target='_blank' rel='noopener noreferrer'>
						<Button>Ver proyecto</Button>
					</a>
					<a href={links[1]} target='_blank' rel='noopener noreferrer'>
						<Button>Ver Código</Button>
					</a>
				</div>
			</div>
		</section>
	)
}
