import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GENERAL_CONTAINER } from "../../reducers/containerNames";

import {
	loginAccount,
	clearInputErrors,
	setWhichGeneralComponentsDisplay,
} from "../../actions";

import "../../SCSS/authentication/registerLogin.scss";

export default function Login() {
	const reduxState = useSelector((state) => state);
	const dispatch = useDispatch();

	const [accountInfo, setAccountInfo] = useState({
		email: "",
		password: "",
	});

	// clears prior input errors when closing the component
	useEffect(() => {
		return () => {
			dispatch(clearInputErrors());
		};
		// eslint-disable-next-line
	}, []);

	const onChange = (e) => {
		setAccountInfo({ ...accountInfo, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(loginAccount(accountInfo));
	};

	const openRegister = () => {
		dispatch(setWhichGeneralComponentsDisplay({ register: true }));
	};

	return (
		<div className="register-login-components">
			<div className="background" />
			<div className="border-container">
				<h1 className="title">Login</h1>
				<form className="form" noValidate onSubmit={handleSubmit}>
					<label htmlFor="login-email" className="form__label">
						Email
					</label>
					<input
						type="email"
						name="email"
						onChange={(e) => onChange(e)}
						value={accountInfo.email}
						id="login-email"
						className="form__text-input"
					/>
					<span className="form__errors">
						{reduxState[GENERAL_CONTAINER].inputErrors.validationAccountEmail}
					</span>
					<label htmlFor="login-password" className="form__label">
						Password
					</label>
					<input
						type="password"
						name="password"
						onChange={(e) => onChange(e)}
						value={accountInfo.password}
						id="login-password"
						className="form__text-input form__text-input--password"
					/>
					<span className="form__errors">
						{reduxState[GENERAL_CONTAINER].inputErrors.validationAccountPassword}
					</span>
					<button type="submit" className="form__submit">
						LOGIN
					</button>
					<span className="form__errors">
						{reduxState[GENERAL_CONTAINER].inputErrors.validationAccount}
						{reduxState[GENERAL_CONTAINER].inputErrors.serverAccount}
					</span>
				</form>
				<div className="footer">
					<span>Not a Member? </span>
					<span className="footer__link" onClick={openRegister}>
						Register
					</span>
				</div>
			</div>
		</div>
	);
}
