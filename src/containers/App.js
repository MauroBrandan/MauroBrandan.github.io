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
import IconSlider from '../components/IconSlider'

// Icons - Images
import HtmlIcon from '../assets/static/icons/html-icon.png'
import CssIcon from '../assets/static/icons/css-icon.png'
import JsIcon from '../assets/static/icons/js-icon.png'
import ReactIcon from '../assets/static/icons/react-icon.png'
import NodeIcon from '../assets/static/icons/node-icon.png'
import MongoIcon from '../assets/static/icons/mongo-icon.png'
import ExpressIcon from '../assets/static/icons/express-icon.png'
import WebpackIcon from '../assets/static/icons/webpack-icon.png'
import WordpressIcon from '../assets/static/icons/wordpress-icon.png'
import FigmaIcon from '../assets/static/icons/figma-icon.png'
import projectImage from '../assets/static/images/project.png'

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
			<Navbar />
			<Home>
				<Hero />
				<main>
					<SectionMain title='Skills' btntext='Hablemos'>
						<IconSlider>
							<Icon>{HtmlIcon}</Icon>
							<Icon>{CssIcon}</Icon>
							<Icon>{JsIcon}</Icon>
							<Icon>{ReactIcon}</Icon>
							<Icon>{NodeIcon}</Icon>
							<Icon>{WebpackIcon}</Icon>
							<Icon>{MongoIcon}</Icon>
							<Icon>{WordpressIcon}</Icon>
							<Icon>{ExpressIcon}</Icon>
							<Icon>{FigmaIcon}</Icon>
						</IconSlider>
					</SectionMain>
					<SectionMain title='Proyectos' btntext='Ver más'>
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
