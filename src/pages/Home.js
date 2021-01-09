import Project from '../templates/Project'

const Home = () => {
    const projectItem = Project()
    const view = `
            <div class="main">
            <section class="projects">
                <h2 class="main__item">Ultimos Proyectos</h2>
                
                ${projectItem}
                ${projectItem}
                
            </section>

            <h2 class="main__item">Sobre mi</h2>
            <section class="aboutMe">

                <section class="aboutMe__item">
                    <h2>Habilidades</h2>
                    <div class="aboutMe__item--details">
                        <ul>
                            <li>Hola</li>
                            <li>Hola</li>
                            <li>Hola</li>
                            <li>Hola</li>
                            <li>Hola</li>
                        </ul>
                    </div>
                </section>

                <section class="aboutMe__item">
                    <h2>Experiencia</h2>
                    <div class="aboutMe__item--details">
                        <ul>
                            <li>Hola</li>
                            <li>Hola</li>
                            <li>Hola</li>
                            <li>Hola</li>
                            <li>Hola</li>
                        </ul>
                    </div>
                </section>

                <section class="aboutMe__item">
                    <h2>Estudios</h2>
                    <div class="aboutMe__item--details">
                        <ul>
                            <li>Hola</li>
                            <li>Hola</li>
                            <li>Hola</li>
                            <li>Hola</li>
                            <li>Hola</li>
                        </ul>
                    </div>
                </section>

            </section>

            <div class="main__item">
                <button><a href="/contacto">Hablemos</a></button> 
            </div>
        </div>
    `;
    return view
}

export default Home