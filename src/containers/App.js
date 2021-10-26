import React, { useState, useEffect } from 'react'

//Components
import Button from '../components/Button'
import TitleHeader from '../components/TitleHeader'
import Navbar from '../components/Navbar'
import SectionMain from '../components/SectionMain'
import Icon from '../components/Icon'
import ProjectCard from '../components/ProjectCard'
import Hero from '../components/Hero'
import Project from '../components/Project'

// Icons - Images
import HtmlIcon from '../assets/static/html-icon.png'
import CssIcon from '../assets/static/css-icon.png'
import JsIcon from '../assets/static/js-icon.png'
import ReactIcon from '../assets/static/react-icon.png'
import projectImage from '../assets/static/project.png'

// Containers
import Home from './Home'
import Projects from './Projects'

function App() {
	const [width, setWidth] = useState(window.innerWidth)

	const onResize = () => {
		setWidth(window.innerWidth)
	}

	useEffect(() => {
		window.addEventListener('resize', onResize)

		return () => {
			window.removeEventListener('resize', onResize)
		}
	}, [width])

	const iconSize = width > 1205 ? 'medium' : 'small'

	return (
		<>
			<Home>
				<Hero />
				<Navbar />
				<main>
					<SectionMain title='Skills'>
						<Icon size={iconSize}>{HtmlIcon}</Icon>
						<Icon size={iconSize}>{CssIcon}</Icon>
						<Icon size={iconSize}>{JsIcon}</Icon>
						<Icon size={iconSize}>{ReactIcon}</Icon>
						<Icon size={iconSize}>{HtmlIcon}</Icon>
					</SectionMain>
					<SectionMain title='Proyectos'>
						<ProjectCard image={projectImage}>Nombre del proyecto</ProjectCard>
						<ProjectCard image={projectImage}>Nombre del proyecto</ProjectCard>
						<ProjectCard image={projectImage}>Nombre del proyecto</ProjectCard>
						<ProjectCard image={projectImage}>Nombre del proyecto</ProjectCard>
					</SectionMain>
				</main>
			</Home>
			<Projects>
				<Project
					title='Platzi Video'
					img={projectImage}
					icons={[HtmlIcon, CssIcon, JsIcon]}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
					architecto facilis eos odit consequuntur blanditiis quia accusamus quam aut
					facere soluta, fugiat quis mollitia illo, incidunt doloribus ab esse! Odit?
				</Project>
				<Project title='Batatabit' img={projectImage} icons={[HtmlIcon, CssIcon]}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
					architecto facilis eos odit consequuntur blanditiis quia accusamus quam aut
					facere soluta, fugiat quis mollitia illo, incidunt doloribus ab esse! Odit?
				</Project>
				<Project title='Todo Mine' img={projectImage} icons={[ReactIcon]}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
					architecto facilis eos odit consequuntur blanditiis quia accusamus quam aut
					facere soluta, fugiat quis mollitia illo, incidunt doloribus ab esse! Odit?
				</Project>
			</Projects>
		</>
	)
}

export default App
