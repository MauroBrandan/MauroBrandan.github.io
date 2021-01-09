import Project from '../templates/Project'

const Projects = () => {
    const projectItem = Project()
    const view = `
        <div class="main">
        <section class="projects">
            <h2 class="main__item">Proyectos</h2>
            
            ${projectItem}
            ${projectItem}
            ${projectItem}
            ${projectItem}
            ${projectItem}

        </section>

        <div class="main__item">
            <button><a href="/contacto">Hablemos</a></button> 
        </div>
    </div>
    `;
    return view
}

export default Projects