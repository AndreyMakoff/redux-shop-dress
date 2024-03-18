import CardProduct from '../filteredProducts/CardProduct';
import './ListFiltered.sass';
import { storeData } from '../../assets/data/storeData';

// eslint-disable-next-line react/prop-types
function ListFiltered({ searchValue }) {
	return (
		<div>
			<div className="productsContainer">
				{/* <NavBar /> */}

				<div className="productsContainer__group">
					{storeData
						// eslint-disable-next-line react/prop-types
						.filter((item) => {
							return (
								item.name
									.toLowerCase()

									// eslint-disable-next-line react/prop-types
									.includes(searchValue.toLowerCase())
							);
						})
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
							);
						})}
				</div>
			</div>
		</div>
	);
}

export default ListFiltered;
