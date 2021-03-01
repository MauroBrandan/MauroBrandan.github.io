import whatsapp from '../static/whatsapp.svg'
import gmail from '../static/gmail.svg'
import instagram from '../static/instagram.svg'
import linkedin from '../static/linkedin.svg'
import github from '../static/github.svg'

const Contact = () => {
    window.scroll(0, 0);
    const view = `
        <div class="main">
            <section class="contact">
                <section class="contact__aboutMe">
                    <div class="contact__aboutMe--bio">
                        <h2>Sobre Mi</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste officia harum placeat aperiam
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolores itaque qui quod, nulla fuga,
                            saepe deleniti est nostrum dignissimos iure maxime repellat aliquid fugiat? Tempora dolore non quis repudiandae.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis veritatis quis velit, cum dignissimos magni unde ducimus animi tenetur
                            nam 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolores itaque qui quod, nulla fuga,
                            saepe deleniti est nostrum dignissimos iure maxime repellat aliquid fugiat? Tempora dolore non quis repudiandae.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis veritatis quis velit, cum dignissimos magni unde ducimus animi tenetur
                            namquisquam ipsam eaque illo voluptatem possimus a voluptatibus quos soluta.
                            porro est magni hic itaque neque inventore. Exercitationem, neque. Laudantium nesciunt dolores et perferendis consectetur mollitia necessitatibus.
                        </p>
                    </div>
                    <div class="contact__aboutMe--socialMedia">
                        <h2>Hablemos</h2>
                        <img src="${gmail}" alt="gmail">
                        <a href="https://www.linkedin.com/in/mauro-brandan/"><img src="${linkedin}" alt="linkedin"></a>
                        <a href="https://github.com/MauroBrandan"><img src="${github}" alt="Github"></a>
                        <img src="${instagram}" alt="instagram">
                        <img src="${whatsapp}" alt="whatsapp">
                    </div>
                </section>
                    <img class="contact__img" src="https://imgur.com/gs3jPhz.jpg" alt="Mauro Brandan">
            </section>
        </div>
    `;
    return view
}

export default Contact