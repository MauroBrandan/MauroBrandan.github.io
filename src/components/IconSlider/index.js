import React from 'react'
import './styles.css'

import HtmlIcon from '../../assets/static/icons/html-icon.png'
import CssIcon from '../../assets/static/icons/css-icon.png'
import JsIcon from '../../assets/static/icons/js-icon.png'
import ReactIcon from '../../assets/static/icons/react-icon.png'
import NextIcon from '../../assets/static/icons/nextjs-icon.svg'
import NodeIcon from '../../assets/static/icons/node-icon.png'
import WebpackIcon from '../../assets/static/icons/webpack-icon.png'
import MongoIcon from '../../assets/static/icons/mongo-icon.png'
import PostgresqlIcon from '../../assets/static/icons/postgresql.svg'
import ExpressIcon from '../../assets/static/icons/express-icon.png'

export default function IconSlider() {
	return (
		<div className='slider'>
			<div className='slide-track'>
				<div className='slide'>
					<img src={HtmlIcon} />
				</div>
				<div className='slide'>
					<img src={CssIcon} />
				</div>
				<div className='slide'>
					<img src={JsIcon} />
				</div>
				<div className='slide'>
					<img src={ReactIcon} />
				</div>
				<div className='slide'>
					<img src={NextIcon} />
				</div>
				<div className='slide'>
					<img src={NodeIcon} />
				</div>
				<div className='slide'>
					<img src={WebpackIcon} />
				</div>
				<div className='slide'>
					<img src={MongoIcon} />
				</div>
				<div className='slide'>
					<img src={PostgresqlIcon} />
				</div>
				<div className='slide'>
					<img src={ExpressIcon} />
				</div>
				<div className='slide'>
					<img src={HtmlIcon} />
				</div>
				<div className='slide'>
					<img src={CssIcon} />
				</div>
				<div className='slide'>
					<img src={JsIcon} />
				</div>
				<div className='slide'>
					<img src={ReactIcon} />
				</div>
				<div className='slide'>
					<img src={NextIcon} />
				</div>
				<div className='slide'>
					<img src={NodeIcon} />
				</div>
				<div className='slide'>
					<img src={WebpackIcon} />
				</div>
				<div className='slide'>
					<img src={MongoIcon} />
				</div>
				<div className='slide'>
					<img src={PostgresqlIcon} />
				</div>
				<div className='slide'>
					<img src={ExpressIcon} />
				</div>
			</div>
		</div>
	)
}
