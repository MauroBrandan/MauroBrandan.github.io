import Header from './templates/Header'
import Footer from './templates/Footer'
import Home from './pages/Home'

const router = () =>{
    const header = null || document.getElementById('header')
    const footer = null || document.getElementById('footer')
    const content = null || document.getElementById('content')

    header.innerHTML = Header()
    content.innerHTML = Home()
    footer.innerHTML = Footer()
}

window.addEventListener('load', router)