import './Slider.sass';
import { nextSlide, prevSlide, dotSlide } from '../../features/SliderSlice';
import { useSelector, useDispatch } from 'react-redux';
import { dataSlider } from '../../assets/data/dataSlider';

function Slider() {
	const slideIndex = useSelector((state) => state.slide.value);
	// console.log('slideIndex', slideIndex);
	const dispatch = useDispatch();
	return (
		<div className="container-slider">
			<button
				className="container-slider__button-left"
				onClick={() => dispatch(prevSlide(slideIndex - 1))}
			>
				<img
					className="container-slider__button-left__row"
					src="../image/row-left.svg"
					alt="row"
				/>
			</button>
			<div className="container-slider__boxsliders">
				{dataSlider.map((item) => {
					return (
						<div
							className="container-slider__boxsliders__element"
							key={item.id}
						>
							{parseInt(item.id) === slideIndex && (
								<img
									className={
										parseInt(item.id) === slideIndex
											? 'container-slider__boxsliders__image_one'
											: 'container-slider__boxsliders__image'
									}
									src={item.url}
									alt="fotodress"
								/>
							)}
						</div>
					);
				})}
				<div className="container-slider__boxsliders__dotcontainer">
					{dataSlider.map((dot, index) => {
						return (
							<div
								className={
									index === slideIndex
										? 'container-slider__boxsliders__dotcontainer__circle-one'
										: 'container-slider__boxsliders__dotcontainer__circle-two'
								}
								key={index}
								onClick={() => dispatch(dotSlide(index))}
							></div>
						);
					})}
				</div>
			</div>

			<button
				className="container-slider__button-right"
				onClick={() => dispatch(nextSlide(slideIndex + 1))}
			>
				<img
					className="container-slider__button-left__row"
					src="../image/row-right.svg"
					alt="row"
				/>
			</button>
		</div>
	);
}

export default Slider;
