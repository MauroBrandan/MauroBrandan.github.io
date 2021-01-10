import instagram from '../static/instagram.svg'
import linkedin from '../static/linkedin.svg'
import github from '../static/github.svg'

const Footer = () => {
    const view = `
        <footer class="footer">
            <section class="footer__item--socialMedia">
                <p>Mauro Brandan </br> Frontend Developer</p>
                <a href="https://github.com/MauroBrandan" target="_blank"><img src="${github}" alt="Github"></a>
                <a href="https://www.linkedin.com/in/mauro-brandan/" target="_blank"><img src="${linkedin}" alt="Linkedin"></a>
                <a href="http://instagram.com" target="_blank"><img src="${instagram}" alt="Instagram"></a>
            </section>
            <p>© 2020 - Mauro Brandan</p>
            <section class="footer__item--pages">
                <a href="#/contacto">Hablemos</a>
                <a href="#/proyectos">Proyectos</a>
            </section>
        </footer>
    `;
    return view
}

export default Footer