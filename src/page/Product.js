import React from 'react'
import './Product.scss'
import { useLocation } from 'react-router-dom'

function Product() {
	let hehe = useLocation();
	console.log(hehe.state);
  return (
    <div className='product'>
			<h2>React State & Props</h2>
			<ul>
				<li>
					<img src="./img/img_01.jpg" alt='' />
					<p>ADIDAS STAN SMITH</p>
					<p>$160</p>
				</li>
				<li>
					<img src="./img/img_02.jpg" alt='' />
					<p>ADIDAS STAN SMITH</p>
					<p>$160</p>
				</li>
			</ul>
		</div>
  )
}

export default Product