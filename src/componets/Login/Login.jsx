import { useState } from 'react';
import './Login.sass';
import { login } from '../../features/AuthSlice.jsx';
import { useDispatch } from 'react-redux';

function Login() {
	const dispatch = useDispatch();

	const initialStete = {
		name: '',
		password: '',
	};
	const [values, setValues] = useState(initialStete);

	const onChange = (e) => {
		const { name, values } = e.target;
		setValues({ ...setValues, [name]: values });
	};

	return (
		<div className="container-login">
			<form className="container-login__box">
				<h3 className="container-login__box__title">Sign in</h3>
				<div className="container-login__box__input">
					<input
						type="text"
						placeholder="Name"
						className="container-login__box__email"
						required
						onChange={onChange}
						value={values.name}
					/>
				</div>
				<div className="container-login__box__input">
					<input
						type="password"
						placeholder="Password"
						required
						className="container-login__box__password"
						onChange={onChange}
						value={values.password}
					/>
				</div>
				<button
					className="container-login__box__button"
					onClick={() => dispatch(login(values))}
				>
					Sign in
				</button>
			</form>
		</div>
	);
}

export default Login;
