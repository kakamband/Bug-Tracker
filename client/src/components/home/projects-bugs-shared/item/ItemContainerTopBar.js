import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { projectContainerName } from "../../../../reducers/containerNames";

import {
	setWhichProjectOrBugComponentsDisplay,
	setWhichBugComponentsDisplay,
} from "../../../../actions";

import { toggleDropdownButtonDisplay } from "../../../../utils/buttonUtils";

import "../../../../SCSS/home/projects-bugs-shared/item/itemContainerTopBar.scss";

export default function ItemContainerTopBar(props) {
	const reduxState = useSelector((state) => state);
	const dispatch = useDispatch();

	const [showOptionsDropdown, setShowOptionsDropdown] = useState(false);

	useEffect(() => {
		toggleDropdownButtonDisplay(
			showOptionsDropdown,
			document.getElementsByClassName("js-item-options-button")[0],
			document.getElementsByClassName("js-item-options-dropdown")[0],
			"item-options-container__button--clicked"
		);
	}, [showOptionsDropdown]);

	const toggleOptionsDropdown = () => {
		// Toggle logic is unnessesary since this onClick will only be reached
		// ...if showOptionsDropdown === false becasue of closeOptionsDropdown
		setShowOptionsDropdown(!showOptionsDropdown);
	};

	// Closes options dropdown when clicking outside of dropdown
	const closeOptionsDropdown = () => {
		// This allows toggleOptionsDropdown to work
		if (showOptionsDropdown) {
			setShowOptionsDropdown(false);
		}
	};

	const switchBetweenDisplayAndEditInfo = () => {
		dispatch(
			setWhichProjectOrBugComponentsDisplay(props.reduxContainerName, {
				...reduxState[props.reduxContainerName].componentsDisplay,
				itemContainerEditInfo: !reduxState[props.reduxContainerName]
					.componentsDisplay.itemContainerEditInfo,
			})
		);
	};

	const openDeleteItemModal = () => {
		dispatch(
			setWhichProjectOrBugComponentsDisplay(props.reduxContainerName, {
				...reduxState[props.reduxContainerName].componentsDisplay,
				itemContainerDeleteModal: true,
			})
		);
	};

	const closeItemContainer = () => {
		dispatch(
			setWhichProjectOrBugComponentsDisplay(props.reduxContainerName, {
				...reduxState[props.reduxContainerName].componentsDisplay,
				listContainer: true,
				itemContainer: false,
				targetItem: null,
			})
		);

		// Resets bug components display if project itemContainer is closed
		if (props.reduxContainerName === projectContainerName) {
			dispatch(setWhichBugComponentsDisplay({}));
		}
	};

	return (
		<div className="top-bar-component js-top-bar">
			<div className="item-options-container js">
				<div
					className="item-options-container__button js-item-options-button"
					onClick={toggleOptionsDropdown}
				>
					<span className="item-options-container__button__text">
						<i className="fa fa-ellipsis-h" aria-hidden="true" />
					</span>
				</div>
				<div className="item-options-container__dropdown js-item-options-dropdown">
					<span
						className="item-options-container__dropdown__option js-edit-option"
						onClick={switchBetweenDisplayAndEditInfo}
					>
						{reduxState[props.reduxContainerName].componentsDisplay
							.itemContainerEditInfo
							? "Cancel"
							: props.reduxContainerName === projectContainerName
							? "Edit Project"
							: "Edit Bug"}
					</span>
					<span
						className="item-options-container__dropdown__option item-options-container__dropdown__option--no-border"
						onClick={openDeleteItemModal}
					>
						{props.reduxContainerName === projectContainerName
							? "Delete Project"
							: "Delete Bug"}
					</span>
				</div>
			</div>
			<div className="x-button" onClick={closeItemContainer}>
				<i className="fa fa-times" aria-hidden="true"></i>
			</div>
		</div>
	);
}
