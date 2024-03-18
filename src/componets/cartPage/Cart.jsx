import './Cart.sass';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../features/CartSlice';

function Cart() {
	const cart = useSelector((state) => state.cart.cart);
	const totalPrice = useSelector((state) => state.cart.totalPrice);
	const totalAmount = useSelector((state) => state.cart.totalPrice);
	const dispatch = useDispatch();

	return (
		<div className="cart-container">
			<h3 className="cart-container__title">Shopping Cart</h3>

			<div className="cart-container__box">
				{totalAmount === 0 ? (
					<h2 className="cart-container__title">Bag is emty</h2>
				) : (
					cart.map((item, index) => {
						return (
							<div key={index} className="cart-container__box-product">
								<div className="cart-container__box-product__left">
									<img
										className="cart-container__box-product__left__item"
										src={item.img}
										alt="foto"
									/>

									<div className="cart-container__box-product__left__desc">
										<span className="cart-container__box-product__left__desc-name">
											{item.name}
										</span>
										<div>
											<span className="cart-container__box-product__left__desc-size">
												Selected size: {item.size} <div></div>
											</span>
											<span className="cart-container__box-product__left__desc-color">
												Selected color:
												<div
													className="cart-container__box-product__left__desc-color__dot"
													style={{ backgroundColor: item.color }}
												></div>
											</span>
											<span className="cart-container__box-product__left__desc-size">
												Amount: {item.amount} <div></div>
											</span>
											<span className="cart-container__box-product__left__desc-size">
												Price: {item.price}$ <div></div>
											</span>
										</div>
									</div>
								</div>

								<button
									className="cart-container__box-product__button"
									onClick={() => dispatch(removeFromCart(item))}
								>
									remove
								</button>
							</div>
						);
					})
				)}
				<span className="cart-container__totalPrice">
					Total price: {totalPrice}$
				</span>
			</div>
		</div>
	);
}

export default Cart;
