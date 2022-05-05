import React from 'react'
import './styles.css'
import HeroImage from '../../assets/static/images/perfil.jpg'
import GithubIcon from '../../assets/static/icons/github.svg'
import LinkedinIcon from '../../assets/static/icons/linkedin.svg'

export default function Hero() {
	return (
		<section className='Hero' style={{ backgroundImage: `url(${HeroImage})` }}>
			<div className='Hero__title'>
				<h1>
					Mauro Brandan <br /> <span>Frontend Developer</span>
				</h1>
			</div>
			<p className='Hero__description'>
				Estudiante de Ingeniería en Sistemas y autodidacta apasionado por el
				desarrollo de aplicaciones web y el diseño de interfaces.
				<br />
				Manejo las tecnologías fundamentales de la web y sus frameworks,
				especializado en React. Además tengo conocimientos sobre diseño de base de
				datos y tecnologías Backend, especialmente en Node.
			</p>
			<div className='Hero__social'>
				<a
					href='https://github.com/MauroBrandan'
					target='_blank'
					rel='noopener noreferrer'
				>
					<img src={GithubIcon} alt='github icon' />
				</a>
				<a
					href='https://www.linkedin.com/in/mauro-brandan/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<img src={LinkedinIcon} alt='linkedin icon' />
				</a>
			</div>
		</section>
	)
}
