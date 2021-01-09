const Header = () => {
    const view = `
    <header class="header">
        <a href="#/"><img class="header__logo" src="src/static/logo.png" alt="Logo"></a>
        <div class="header__description">
            <h1>mauro Brandan</h1>
            <h3>frontend Developer</h3>
        </div>
        <ul class="header__menu">
            <li><button><a href="#/">Home</a></button></li> 
            <li><button><a href="#/proyectos">Proyectos</a></button></li> 
            <li><button><a href="#/contacto">Hablemos</a></button></li> 
        </ul>
    </header>
    `;
    return view
}

export default Header