import React from 'react'

//Components
import Navbar from '../components/Navbar'
import SectionMain from '../components/SectionMain'
import ProjectCard from '../components/ProjectCard'
import Hero from '../components/Hero'
import IconSlider from '../components/IconSlider'

// Containers
import Home from './Home'
import Projects from './Projects'
import Contact from './Contact'

// Images
import platzivideoImage from '../assets/static/images/platzivideo.jpg'
import batatabitImage from '../assets/static/images/batatabit.png'
import todomineImage from '../assets/static/images/todomine.png'
import cientificoImage from '../assets/static/images/cientifico.png'

function App() {
	return (
		<>
			<Navbar />

			<Home>
				<Hero />
				<main>
					<SectionMain title='Skills' btntext='Hablemos' btnlink='/#Contacto'>
						<IconSlider />
					</SectionMain>
					<SectionMain title='Proyectos Principales' btntext='Ver más' btnlink='/#Proyectos'>
						<ProjectCard image={platzivideoImage} btnlink='/#platzivideo'>Platzi Video</ProjectCard>
						<ProjectCard image={batatabitImage} btnlink='/#batatabit'>Batatabit</ProjectCard>
						<ProjectCard image={todomineImage} btnlink='/#todomine'>Todo Mine</ProjectCard>
						<ProjectCard image={cientificoImage} btnlink='/#cientifico'>100tifico</ProjectCard>
					</SectionMain>
				</main>
			</Home>

			<Projects />

			<Contact />
		</>
	)
}

export default App
