import './App.scss';
import Home from './page/Home';
import Product from './page/Product';
import Not from './page/Not';

import {Link, BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<header>
				<nav>
					<Link to="/home">HOME</Link>
					<Link to="/product" state="hehe">Product</Link>
				</nav>
			</header>
			<main>
				<Routes>
					<Route path='/home' element={<Home oing="hehe"/>} />
					<Route path='/product' element={<Product />} />
					<Route path='/*' element={<Not />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;
