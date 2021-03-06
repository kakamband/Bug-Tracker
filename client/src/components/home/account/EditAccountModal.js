import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ACCOUNT_CONTAINER } from "../../../reducers/containerNames";

import {
	setWhichAccountComponentsDisplay,
} from "../../../actions";

// Components
import EditAccountModalChangeInfo from "./EditAccountModalChangeInfo";
import EditAccountModalChangeEmail from "./EditAccountModalChangeEmail";
import EditAccountModalChangePassword from "./EditAccountModalChangePassword";
import EditAccountModalDeleteAccount from "./EditAccountModalDeleteAccount";

import "../../../SCSS/home/account/editAccountModals.scss";

export default function EditAccountModal() {
	const reduxState = useSelector((state) => state);
	const dispatch = useDispatch();

	const closeAccountComponents = () => {
		dispatch(setWhichAccountComponentsDisplay({}));
	};

	return (
		<div className="edit-account-modal-component">
			<div className="edit-account-modal">
				<div className="exit-button" onClick={closeAccountComponents}>
					<i className="fa fa-times" aria-hidden="true"></i>
				</div>
				{reduxState[ACCOUNT_CONTAINER].componentsDisplay.editAccountModalChangeInfo ? (
					<EditAccountModalChangeInfo />
				) : null}
				{reduxState[ACCOUNT_CONTAINER].componentsDisplay.editAccountModalChangeEmail ? (
					<EditAccountModalChangeEmail />
				) : null}
				{reduxState[ACCOUNT_CONTAINER].componentsDisplay.editAccountModalChangePassword ? (
					<EditAccountModalChangePassword />
				) : null}
				{reduxState[ACCOUNT_CONTAINER].componentsDisplay.editAccountModalDeleteAccount ? (
					<EditAccountModalDeleteAccount />
				) : null}
			</div>
		</div>
	);
}
