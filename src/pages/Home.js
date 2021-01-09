const Home = () => {
    const view = `
            <div class="main">
            <section class="projects">
                <h2 class="main__item">Ultimos Proyectos</h2>
                
                <section class="projects__item">
                    <div class="projects__item--details">
                        <h2>Nombre del Proyecto</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, sed facilis numquam, maiores, iste repudiandae eaque ipsa totam tempora perferendis vel. Obcaecati voluptate maxime neque, corrupti beatae natus ad reiciendis!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa officiis qui iusto, rerum ut nihil nemo similique at a inventore non ratione deserunt assumenda error laboriosam libero veritatis officia. Ad!
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis esse inventore officia vero, praesentium consequatur soluta eligendi, a quisquam laudantium quod eius? Inventore eum ullam natus velit possimus exercitationem ducimus!
                        </p>
                        <button><a href="/">Ver Proyecto</a></button>
                    </div>
                    <img src="src/static/project.jpg" alt="">
                </section>

                <section class="projects__item">
                    <div class="projects__item--details">
                        <h2>Nombre del Proyecto</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, sed facilis numquam, maiores, iste repudiandae eaque ipsa totam tempora perferendis vel. Obcaecati voluptate maxime neque, corrupti beatae natus ad reiciendis!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa officiis qui iusto, rerum ut nihil nemo similique at a inventore non ratione deserunt assumenda error laboriosam libero veritatis officia. Ad!
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis esse inventore officia vero, praesentium consequatur soluta eligendi, a quisquam laudantium quod eius? Inventore eum ullam natus velit possimus exercitationem ducimus!
                        </p>
                        <button><a href="/">Ver Proyecto</a></button>
                    </div>
                    <img src="src/static/project.jpg" alt="">
                </section>
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