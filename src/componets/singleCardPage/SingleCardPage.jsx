// import NavBar from '../navBar/NavBar';
import { useState } from 'react';
import './SingleCardPage.sass';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/CartSlice';

function SingleCardPage() {
	const { id } = useParams();
	const oneProduct = useSelector((state) => state.products.singleProduct);

	const [size, setSize] = useState(oneProduct[0].size[0]);
	const [color, setColor] = useState(oneProduct[0].colors[0]);

	const dispatch = useDispatch();

	return (
		<div>
			{oneProduct
				.filter((product) => product.id === id)
				.map((product, index) => {
					return (
						<div key={index} className="singleCardPage-container">
							<img
								src={product.img}
								alt={product.name}
								className="singleCardPage-container__img"
							/>
							<div className="singleCardPage-container__desc">
								<h3 className="singleCardPage-container__desc__title">
									{product.name}
								</h3>
								<span className="singleCardPage-container__desc__text">
									{product.text}
								</span>

								<div className="singleCardPage-container__desc__box">
									<label className="singleCardPage-container__desc__sizebox-label">
										Size
									</label>
									<select
										id="size"
										value={size}
										onChange={(e) => setSize(e.target.value)}
										className="singleCardPage-container__desc__sizebox-select"
									>
										{product.size.map((item, index) => {
											return (
												<option
													key={index + 1}
													className="singleCardPage-container__desc__sizebox-select__option"
												>
													{item}
												</option>
											);
										})}
									</select>
									<div className="singleCardPage-container__desc__colorbox">
										<label className="singleCardPage-container__desc__colorbox-label">
											Color
										</label>
										<select
											id="color"
											value={color}
											onChange={(e) => setColor(e.target.value)}
											className="singleCardPage-container__desc__colorbox-select"
										>
											{product.colors.map((color, index) => {
												return (
													<option
														key={index + 1}
														className="singleCardPage-container__desc__colorbox-select__option"
													>
														{color}
													</option>
												);
											})}
										</select>
									</div>
								</div>
								<p className="singleCardPage-container__desc__price">
									{product.price}$
								</p>
								<button
									className="singleCardPage-container__desc__button"
									onClick={() =>
										dispatch(
											addToCart({
												id: product.id,
												text: product.text,
												size: size,
												color: color,
												img: product.img,
												price: product.price,
												name: product.name,
												amount: 1,
											})
										)
									}
								>
									Add to card
								</button>
							</div>
						</div>
					);
				})}
		</div>
	);
}

export default SingleCardPage;
