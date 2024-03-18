import './Post.sass';
function Post() {
	return (
		<div className="post-container">
			<img
				src="./img/icon-letter.svg"
				alt=""
				className="post-container__letter"
			/>
			<h3 className="post-container__title">Newsletter</h3>
			<span className="post-container__text">
				Just use this benefit to purchase a new product.
			</span>
			<input
				type="email"
				placeholder="Email Address..."
				className="post-container__input"
			/>
			<div className="post-container__agreement">
				<input type="checkbox" className="post-container__agreement__check" />
				<label htmlFor="checkbox" className="post-container__agreement__label">
					I want to receive emails containing product updates, special offers{' '}
					<br />
					and occasional survey invites
				</label>
			</div>
			<button type="submit" className="post-container__button">
				<span className="post-container__button__span">Yes, text Me!</span>
			</button>
		</div>
	);
}

export default Post;
