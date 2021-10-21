import React from 'react'

//Components
import Button from '../components/Button'
import TitleHeader from '../components/TitleHeader'
import Navbar from '../components/Navbar'
import SectionMain from '../components/SectionMain'
import Icon from '../components/Icon'
import ProjectCard from '../components/ProjectCard'
import Hero from '../components/Hero'

// Icons - Images
import HtmlIcon from '../assets/static/html-icon.png'
import CssIcon from '../assets/static/css-icon.png'
import JsIcon from '../assets/static/js-icon.png'
import ReactIcon from '../assets/static/react-icon.png'
import projectImage from '../assets/static/project.png'

// Containers
import Home from './Home'

function App() {
	return (
		<Home>
			<Navbar />
			<Hero />
			<main>
				<SectionMain title='Skills'>
					<Icon>{HtmlIcon}</Icon>
					<Icon>{CssIcon}</Icon>
					<Icon>{JsIcon}</Icon>
					<Icon>{ReactIcon}</Icon>
					<Icon>{HtmlIcon}</Icon>
				</SectionMain>
				<SectionMain title='Proyectos'>
					<ProjectCard image={projectImage}>Nombre del proyecto</ProjectCard>
					<ProjectCard image={projectImage}>Nombre del proyecto</ProjectCard>
					<ProjectCard image={projectImage}>Nombre del proyecto</ProjectCard>
					<ProjectCard image={projectImage}>Nombre del proyecto</ProjectCard>
				</SectionMain>
			</main>
		</Home>
	)
}

export default App
