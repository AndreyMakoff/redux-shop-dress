import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './FilteredProducts.sass';
// import NavBar from '../navBar/NavBar';
import CardProduct from './CardProduct';
// import CardProduct from './CardProduct';

function FilteredProducts() {
	const products = useSelector((state) => state.products.filteredProducts);

	const { type } = useParams();

	return (
		<div className="productsContainer">
			{/* <NavBar /> */}
			<h1 className="productsContainer__title">{type}</h1>
			<div className="productsContainer__group">
				{products
					.filter((item) => item.type === type)
					.map((item, index) => {
						return (
							<CardProduct
								key={index}
								id={item.id}
								name={item.name}
								price={item.price}
								colors={item.colors}
								img={item.img}
							/>
							// <div className="productsContainer__group-card" key={index}>
							// 	<img
							// 		className="productsContainer__group-card__img"
							// 		src={item.img}
							// 		alt="foto"
							// 	/>
							// 	<span className="productsContainer__group-card__name">
							// 		{item.name}
							// 	</span>

							// 	<span className="productsContainer__group-card__price">
							// 		{item.price} руб.
							// 	</span>
							// 	<button className="productsContainer__group-card__button">
							// 		Купить
							// 	</button>
							// </div>
						);
					})}
			</div>
		</div>
	);
}

export default FilteredProducts;
