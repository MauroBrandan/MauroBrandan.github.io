import React from 'react'
import '../assets/styles/Contact.css'

import TitleHeader from '../components/TitleHeader'

function Contact() {
	return (
		<section className='Contact' id='Contacto'>
			<TitleHeader position='center' size='big'>
				Contacto
			</TitleHeader>
			<div className='Contact__info'>
				<a href='https://github.com/MauroBrandan' target='_blank' rel='noopener noreferrer'>
					<svg
						width='77'
						height='77'
						viewBox='0 0 77 77'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M38.5 1C28.5544 1 19.0161 4.95088 11.9835 11.9835C4.95094 19.0161 1.00006 28.5543 1.00006 38.4999C0.984489 47.1345 3.8687 55.5243 9.19028 62.3241C14.5119 69.1239 21.9626 73.9399 30.3478 75.9999V66.2173H27.087C18.5435 66.2173 15.5435 53.1738 10.7827 53.1738C19.8805 53.1738 21.6413 59.6956 27.087 59.6956C27.5291 59.7546 27.979 59.711 28.4015 59.568C28.824 59.425 29.2079 59.1865 29.5234 58.8711C29.8388 58.5557 30.0773 58.1718 30.2203 57.7492C30.3632 57.3267 30.4069 56.8768 30.3478 56.4347V55.2934C20.8587 52.6195 14.0435 45.5108 14.0435 36.8695C14.1198 32.374 15.9583 28.0882 19.1631 24.9347C18.3462 23.1718 18.0444 21.2138 18.2925 19.2868C18.5406 17.3597 19.3285 15.542 20.5652 14.0435C23.5483 14.939 26.2312 16.6299 28.3261 18.9348C34.8987 16.5478 42.1013 16.5478 48.6739 18.9348C50.7688 16.6299 53.4517 14.939 56.4348 14.0435C57.6715 15.542 58.4594 17.3597 58.7075 19.2868C58.9556 21.2138 58.6538 23.1718 57.8369 24.9347C61.0417 28.0882 62.8802 32.374 62.9565 36.8695C62.9565 45.8043 55.4891 53.1738 45.2826 55.6521C46.334 57.9368 46.8045 60.446 46.6522 62.9564V75.9999C55.0374 73.9399 62.4881 69.1239 67.8097 62.3241C73.1313 55.5243 76.0155 47.1345 75.9999 38.4999C75.9999 28.5543 72.0491 19.0161 65.0165 11.9835C57.9839 4.95088 48.4456 1 38.5 1V1Z'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</a>

				<a href='https://www.linkedin.com/in/mauro-brandan/' target='_blank' rel='noopener noreferrer'>
					<svg
						width='77'
						height='77'
						viewBox='0 0 77 77'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M17.0714 22.4286C20.0301 22.4286 22.4286 20.0301 22.4286 17.0714C22.4286 14.1128 20.0301 11.7143 17.0714 11.7143C14.1128 11.7143 11.7143 14.1128 11.7143 17.0714C11.7143 20.0301 14.1128 22.4286 17.0714 22.4286Z'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M22.4286 29.5714H11.7143V65.2857H22.4286V29.5714Z'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M51 29.5714C48.9134 29.5277 46.8476 29.9926 44.9809 30.926C43.1141 31.8593 41.5027 33.2331 40.2857 34.9286V29.5714H29.5714V65.2857H40.2857V45.6429C40.2857 39.7143 43.4643 36.7143 47.4286 36.7143C51.3929 36.7143 54.5714 39.7143 54.5714 45.6429V65.2857H65.2857V45.6429C65.2857 35.8929 59.9286 29.5714 51 29.5714Z'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M70.6429 1H6.35714C3.39847 1 1 3.39847 1 6.35714V70.6429C1 73.6015 3.39847 76 6.35714 76H70.6429C73.6015 76 76 73.6015 76 70.6429V6.35714C76 3.39847 73.6015 1 70.6429 1Z'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</a>
			</div>
		</section>
	)
}

export default Contact
