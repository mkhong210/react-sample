import React from 'react'
import './Product.scss'
import { useLocation } from 'react-router-dom'
import img1 from '../img/img_01.jpg'
import img2 from '../img/img_02.jpg'

function Product() {
	let hehe = useLocation();
	console.log(hehe.state);
  return (
    <div className='product'>
			<h2>React State & Props</h2>
			<ul>
				<li>
					<img src={img1} alt='' />
					<p>ADIDAS STAN SMITH</p>
					<p>$160</p>
				</li>
				<li>
					<img src={img2} alt='' />
					<p>ADIDAS STAN SMITH</p>
					<p>$160</p>
				</li>
			</ul>
		</div>
  )
}

export default Product