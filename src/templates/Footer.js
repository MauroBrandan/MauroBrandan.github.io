const Footer = () => {
    const view = `
        <footer class="footer">
            <section class="footer__item--socialMedia">
                <p>Mauro Brandan </br> Frontend Developer</p>
                <a href="https://github.com/MauroBrandan" target="_blank"><img src="src/static/github.svg" alt=""></a>
                <a href="https://www.linkedin.com/in/mauro-brandan/" target="_blank"><img src="src/static/linkedin.svg" alt=""></a>
                <a href="http://instagram.com" target="_blank"><img src="src/static/instagram.svg" alt=""></a>
            </section>
            <p>© 2020 - Mauro Brandan</p>
            <section class="footer__item--pages">
                <a href="/contacto">Hablemos</a>
                <a href="/proyectos">Proyectos</a>
            </section>
        </footer>
    `;
    return view
}

export default Footer