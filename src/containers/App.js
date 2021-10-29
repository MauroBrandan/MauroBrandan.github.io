import React from 'react'

//Components
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
import Contact from './Contact'

function App() {
	return (
		<>
			<Navbar />

			<Home>
				<Hero />
				<main>
					<SectionMain title='Skills' btntext='Hablemos' btnlink='/#Contacto'>
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
					<SectionMain title='Proyectos Principales' btntext='Ver más' btnlink='/#Proyectos'>
						<ProjectCard image={projectImage} btnlink='/#PlatziVideo'>Platzi Video</ProjectCard>
						<ProjectCard image={projectImage} btnlink='/#Batatabit'>Batatabit</ProjectCard>
						<ProjectCard image={projectImage} btnlink='/#TodoMine'>Todo Mine</ProjectCard>
						<ProjectCard image={projectImage} btnlink='/#100tifico'>100tifico</ProjectCard>
					</SectionMain>
				</main>
			</Home>

			<Projects>
				<Project title='Platzi Video' img={projectImage} icons={[HtmlIcon, CssIcon, JsIcon]} id='PlatziVideo' links={['https://platzi-video-mb.herokuapp.com/', 'https://github.com/MauroBrandan/PlatziVideo']}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
					architecto facilis eos odit consequuntur blanditiis quia accusamus quam aut
					facere soluta, fugiat quis mollitia illo, incidunt doloribus ab esse! Odit?
				</Project>
				<Project title='Batatabit' img={projectImage} icons={[HtmlIcon, CssIcon]} id='Batatabit' links={['https://maurobrandan.com/Batatabit/', 'https://github.com/MauroBrandan/Batatabit']}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
					architecto facilis eos odit consequuntur blanditiis quia accusamus quam aut
					facere soluta, fugiat quis mollitia illo, incidunt doloribus ab esse! Odit?
				</Project>
				<Project title='Todo Mine' img={projectImage} icons={[ReactIcon]} id='TodoMine' links={['https://maurobrandan.com/TodoMine/', 'https://github.com/MauroBrandan/TodoMine']}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
					architecto facilis eos odit consequuntur blanditiis quia accusamus quam aut
					facere soluta, fugiat quis mollitia illo, incidunt doloribus ab esse! Odit?
				</Project>
				<Project title='100tifico' img={projectImage} icons={[ReactIcon]} id='100tifico' links={['https://maurobrandan.com/100tifico/', 'https://github.com/MauroBrandan/100tifico']}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
					architecto facilis eos odit consequuntur blanditiis quia accusamus quam aut
					facere soluta, fugiat quis mollitia illo, incidunt doloribus ab esse! Odit?
				</Project>
			</Projects>

			<Contact />
		</>
	)
}

export default App
