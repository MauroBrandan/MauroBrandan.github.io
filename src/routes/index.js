import Header from '../templates/Header'
import Footer from '../templates/Footer'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'
import Error404 from '../pages/Error404'

const routes = {
    '/': Home,
    '/proyectos': Projects,
    '/contacto': Contact,
}

const getHash = () => {
    let hash = location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'
    if(hash === '/'){
        return hash
    }

    return `/${hash}`
}


const router = () =>{
    const header = null || document.getElementById('header')
    const content = null || document.getElementById('content')
    const footer = null || document.getElementById('footer')

    header.innerHTML = Header()
    
    let path = getHash()
    let render = routes[path] ? routes[path] : Error404
    
    content.innerHTML = render()

    footer.innerHTML = Footer()
}

export default router