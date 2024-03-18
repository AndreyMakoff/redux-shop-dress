import './NavBar.sass';
import { useDispatch, useSelector } from 'react-redux';
import { filterProducts } from '../../features/ProductsSlice';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function NavBar({ searchValue, setSearchValue }) {
	const totalAmount = useSelector((state) => state.cart.totalAmount);
	const navButtons = ['Hoodie', 'Hat', 'Cap', 'Bag'];

	const dispatch = useDispatch();
	return (
		<div className="navbar-box">
			<Link to={'/'}>
				<img src="../image/LOGO.svg" alt="logo" className="navbar-box__logo" />
			</Link>

			<ul className="navbar-box__list">
				{navButtons.map((button, index) => {
					return (
						<Link
							to={'/filteredProducts/' + button}
							key={index}
							className="navbar-box__list__link"
						>
							<li onClick={() => dispatch(filterProducts(button))}>{button}</li>
						</Link>
					);
				})}
			</ul>
			<Link to={'/cart'}>
				<div className="navbar-box__cart">
					<img
						src="../image/shopping-cart.svg"
						className="navbar-box__cart__svg"
					/>
					<span className="navbar-box__cart__total">{totalAmount}</span>
				</div>
			</Link>

			<Link to={'/login'}>
				<span className="navbar-box__login">Login</span>
			</Link>
			<Link to={'/listFiltered'}>
				<form className="navbar-box__search">
					<input
						type="text"
						placeholder="Например: Платье"
						className="navbar-box__search__input"
						value={searchValue}
						onChange={(event) => setSearchValue(event.target.value)}
					/>
					<div className="navbar-box__search__glass">
						<img
							src="../image/glass.svg"
							alt="glass"
							className="navbar-box__search__glass__img"
						/>
					</div>
				</form>
			</Link>
		</div>
	);
}

export default NavBar;
