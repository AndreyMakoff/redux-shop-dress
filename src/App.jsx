import './App.sass';
import Main from './componets/mainsecton/Main.jsx';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FilteredProducts from './componets/filteredProducts/FilteredProducts.jsx';
import SingleCardPage from './componets/singleCardPage/SingleCardPage.jsx';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './componets/navBar/NavBar.jsx';
// import { useSelector } from 'react-redux';
import Cart from './componets/cartPage/Cart.jsx';
import Login from './componets/Login/Login.jsx';
import ListFiltered from './componets/listFiltered.jsx/ListFiltered.jsx';

function App() {
	const [searchValue, setSearchValue] = useState('');
	console.log(searchValue);
	// const user = useSelector((state) => state.user.user);
	// const { authUser } = user;
	// console.log('user', user);
	// console.log('authUser', authUser);
	return (
		// <RouterProvider router={router}></RouterProvider>

		<div className="container">
			<BrowserRouter>
				<NavBar searchValue={searchValue} setSearchValue={setSearchValue} />
				<Routes>
					<Route path="/" element={<Main />} />
					<Route
						path="/filteredProducts/:type"
						element={<FilteredProducts />}
					/>
					<Route
						path="/filteredProducts/:type/:id"
						element={<SingleCardPage />}
					/>
					<Route path="/cart" element={<Cart />} />
					<Route
						path="/listFiltered"
						element={<ListFiltered searchValue={searchValue} />}
					/>
					<Route path="/login" element={<Login />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
