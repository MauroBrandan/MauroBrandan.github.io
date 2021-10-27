import React from 'react'
import './styles.css'
import HeroImage from '../../assets/static/images/perfil.jpg'
import GithubIcon from '../../assets/static/icons/github.svg'
import LinkedinIcon from '../../assets/static/icons/linkedin.svg'

export default function index() {
	return (
		<section className='Hero' style={{ backgroundImage: `url(${HeroImage})` }}>
			<div className='Hero__title'>
				<h1>
					Mauro Brandan <br /> <span>Frontend Developer</span>
				</h1>
			</div>
			<p className='Hero__description'>
				Loremsimply dummy text of the printing and typesetting industry. Lorem Ipsum
				has been the industry's standard dummy text ever since the 1500s, when an
				unknown printer took a galley of type and scrambled it to make a type
				specimen book. It has survived not only
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
