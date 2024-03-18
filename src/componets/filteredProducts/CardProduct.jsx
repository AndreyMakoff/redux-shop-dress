/* eslint-disable react/prop-types */
import { Link, useParams } from 'react-router-dom';
import './CardProduct.sass';
import { useDispatch } from 'react-redux';
import { singleCardProduct } from '../../features/ProductsSlice';

function CardProduct({ img, name, price, colors, id }) {
	const { type } = useParams();
	const dispatch = useDispatch();
	return (
		<Link to={`/filteredProducts/${type}/` + id}>
			<div
				className="productsContainer__group-card"
				onClick={() => dispatch(singleCardProduct(id))}
			>
				<img
					className="productsContainer__group-card__img"
					src={img}
					alt="foto"
				/>
				<span className="productsContainer__group-card__name">{name}</span>
				<span className="productsContainer__group-card__price">{price}$</span>
				<div className="productsContainer__group-card__dotcontainer">
					{colors?.map((color, index) => {
						return (
							<div
								style={{ backgroundColor: color }}
								className={
									'productsContainer__group-card__dotcontainer__circle'
								}
								key={index}
							></div>
						);
					})}
					{/* <button className="productsContainer__group-card__button">Купить</button> */}
				</div>
			</div>
		</Link>
	);
}
export default CardProduct;
