import React from 'react'
import '../assets/styles/Projects.css'

import TitleHeader from '../components/TitleHeader'
import Project from '../components/Project'

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

const projects = [
	{
		id: 'platzivideo',
		title: 'Platzi Video',
		image: platzivideoImage,
		icons: [MongoIcon, ExpressIcon, ReactIcon, NodeIcon],
		links: [
			'https://platzi-video-mb.herokuapp.com/',
			'https://github.com/MauroBrandan/PlatziVideo',
		],
		description:
			'Proyecto de la Escuela de JavaScript de Platzi. Donde desarrollo una aplicación web de streaming de peliculas y videos, usando el stack MERN. Desarrollando la base de datos en MongoDB, el Backend con Express y Node, y el Frontend con React. Algunos features son el manejo de inicio de sesión y agregar películas a favoritos.',
	},
	{
		id: 'batatabit',
		title: 'Batatabit',
		image: batatabitImage,
		icons: [HtmlIcon, CssIcon],
		links: [
			'https://maurobrandan.com/Batatabit/',
			'https://github.com/MauroBrandan/Batatabit',
		],
		description:
			'Proyecto de maquetación basado en un prototipo de Figma, siguiendo la metodología de mobile first.',
	},
	{
		id: 'todomine',
		title: 'Todo Mine',
		image: todomineImage,
		icons: [ReactIcon],
		links: [
			'https://maurobrandan.com/TodoMine/',
			'https://github.com/MauroBrandan/TodoMine',
		],
		description:
			'Proyecto de un gestor de tareas hecho en React. Donde aplico conceptos fundamentales como manejo de eventos y estado, composición de componentes y distintos patrones de render. Y uso el Local Storage para la persistencia de datos.',
	},
	{
		id: 'cientifico',
		title: '100tifico',
		image: cientificoImage,
		icons: [HtmlIcon, CssIcon, JsIcon],
		links: [
			'https://maurobrandan.com/100tifico/',
			'https://github.com/MauroBrandan/100tifico',
		],
		description:
			'Proyecto de una single page application en JavaScript Vanilla, con llamados a la API de Rick and Morty para mostrar información y navegar entre los detalles de cada personaje.',
	},
]

function Projects() {
	return (
		<section className='Projects' id='Proyectos'>
			<TitleHeader position='center' size='big'>
				Proyectos
			</TitleHeader>
			{projects.map((project) => (
				<Project
					key={project.id}
					id={project.id}
					title={project.title}
					img={project.image}
					icons={project.icons}
					links={project.links}
				>
					{project.description}
				</Project>
			))}
		</section>
	)
}

export default Projects
