import Header from './templates/Header'
import Footer from './templates/Footer'

const router = () =>{
    const header = null || document.getElementById('header')
    const footer = null || document.getElementById('footer')

    header.innerHTML = Header()
    footer.innerHTML = Footer()
}

window.addEventListener('load', router)