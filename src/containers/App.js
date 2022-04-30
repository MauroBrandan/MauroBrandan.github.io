import React from 'react'

//Components
import Navbar from '../components/Navbar'
import SectionMain from '../components/SectionMain'
import ProjectCard from '../components/ProjectCard'
import Hero from '../components/Hero'
import Project from '../components/Project'
import IconSlider from '../components/IconSlider'

// Containers
import Home from './Home'
import Projects from './Projects'
import Contact from './Contact'

// Icons
import HtmlIcon from '../assets/static/icons/html-icon.png'
import CssIcon from '../assets/static/icons/css-icon.png'
import JsIcon from '../assets/static/icons/js-icon.png'
import ReactIcon from '../assets/static/icons/react-icon.png'
import NodeIcon from '../assets/static/icons/node-icon.png'
import MongoIcon from '../assets/static/icons/mongo-icon.png'
import ExpressIcon from '../assets/static/icons/express-icon.png'

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
					<SectionMain
						title='Proyectos Principales'
						btntext='Ver más'
						btnlink='/#Proyectos'
					>
						<ProjectCard image={platzivideoImage} btnlink='/#PlatziVideo'>
							Platzi Video
						</ProjectCard>
						<ProjectCard image={batatabitImage} btnlink='/#Batatabit'>
							Batatabit
						</ProjectCard>
						<ProjectCard image={todomineImage} btnlink='/#TodoMine'>
							Todo Mine
						</ProjectCard>
						<ProjectCard image={cientificoImage} btnlink='/#100tifico'>
							100tifico
						</ProjectCard>
					</SectionMain>
				</main>
			</Home>

			<Projects>
				<Project
					title='Platzi Video'
					img={platzivideoImage}
					icons={[MongoIcon, ExpressIcon, ReactIcon, NodeIcon]}
					id='PlatziVideo'
					links={[
						'https://platzi-video-mb.herokuapp.com/',
						'https://github.com/MauroBrandan/PlatziVideo',
					]}
				>
					Proyecto de la Escuela de JavaScript de Platzi. Donde desarrollo una
					aplicación web de streaming de peliculas y videos, usando el stack MERN.
					<br />
					Desarrollando la base de datos en MongoDB, el Backend con Express y Node, y
					el Frontend con React.
					<br />
					Algunos features son el manejo de inicio de sesión y agregar películas a
					favoritos.
				</Project>
				<Project
					title='Batatabit'
					img={batatabitImage}
					icons={[HtmlIcon, CssIcon]}
					id='Batatabit'
					links={[
						'https://maurobrandan.com/Batatabit/',
						'https://github.com/MauroBrandan/Batatabit',
					]}
				>
					Proyecto de maquetación basado en un prototipo de Figma, siguiendo la
					metodología de mobile first.
				</Project>
				<Project
					title='Todo Mine'
					img={todomineImage}
					icons={[ReactIcon]}
					id='TodoMine'
					links={[
						'https://maurobrandan.com/TodoMine/',
						'https://github.com/MauroBrandan/TodoMine',
					]}
				>
					Proyecto de un gestor de tareas hecho en React. Donde aplico conceptos
					fundamentales como manejo de eventos y estado, composición de componentes y
					distintos patrones de render. Y uso el Local Storage para la persistencia
					de datos.
				</Project>
				<Project
					title='100tifico'
					img={cientificoImage}
					icons={[HtmlIcon, CssIcon, JsIcon]}
					id='100tifico'
					links={[
						'https://maurobrandan.com/100tifico/',
						'https://github.com/MauroBrandan/100tifico',
					]}
				>
					Proyecto de una single page application en JavaScript Vanilla, con llamados
					a la API de Rick and Morty para mostrar información y navegar entre los
					detalles de cada personaje.
				</Project>
			</Projects>

			<Contact />
		</>
	)
}

export default App
