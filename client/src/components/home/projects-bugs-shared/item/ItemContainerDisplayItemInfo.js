import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
	projectContainerName,
	bugContainerName,
	sizeContainerName,
} from "../../../../reducers/containerNames";

import { manageSizeOfItemBoxsInPairContainer } from "../../../../utils/itemContainerUtils";
import { formatDateMMddYYYY } from "../../../../utils/dateUtils";
import { displayGrayedOutNoneIfEmpty } from "../../../../utils/elementUtils";

import "../../../../SCSS/home/projects-bugs-shared/item/itemContainerDisplayItemInfo.scss";

export default function ItemContainerDisplayItemInfo(props) {
	const reduxState = useSelector((state) => state);

	useEffect(() => {
		if (
			reduxState[sizeContainerName].constants
				.itemContainerOuterDividingContainerMinWidth !== null
		) {
			manageSizeOfItemBoxsInPairContainer(
				document.getElementsByClassName("js-description-info-pair")[0],
				"outer-dividing-container--half-width",
				reduxState[sizeContainerName].constants
					.itemContainerOuterDividingContainerMinWidth
			);
		}
		// eslint-disable-next-line
	}, [
		// eslint-disable-next-line
		reduxState[sizeContainerName].constants
			.itemContainerOuterDividingContainerMinWidth,
	]);

	const getStatusBoxColorClassName = () => {
		const filteredStatusList = reduxState[
			props.reduxContainerName
		].priorityStatusOptions.statusList.filter(
			(status) =>
				status.id ===
				reduxState[props.reduxContainerName].componentsDisplay.targetItem
					.status_id
		);

		return (
			" status-box-background-color-" +
			(filteredStatusList.length > 0 ? filteredStatusList[0].color : "problem")
		);
	};

	return (
		<div>
			<div className="outer-dividing-container outer-dividing-container--full">
				<h1
					className={
						"item-name" +
						(reduxState[props.reduxContainerName].componentsDisplay.targetItem
							.status_id ===
						reduxState[props.reduxContainerName].priorityStatusOptions
							.statusCompletionId
							? " name-completed-color"
							: props.reduxContainerName === projectContainerName
							? " name-project-color"
							: " name-bug-color")
					}
				>
					{reduxState[props.reduxContainerName].componentsDisplay.targetItem
						.status_id !==
					reduxState[props.reduxContainerName].priorityStatusOptions
						.statusCompletionId ? null : (
						<i className="fa fa-check name-completed-icon" aria-hidden="true" />
					)}
					{
						reduxState[props.reduxContainerName].componentsDisplay.targetItem
							.name
					}
				</h1>
				<div className="item-creation-date">
					Created on:{" "}
					{formatDateMMddYYYY(
						reduxState[props.reduxContainerName].componentsDisplay.targetItem
							.creation_date
					)}
				</div>
			</div>
			<div className="pair-container js-description-info-pair">
				<div className="outer-dividing-container">
					<div className="item-box item-box--desciption-info-height">
						<h2 className="item-box__title">Description</h2>
						<span className="item-box__description">
							{
								reduxState[props.reduxContainerName].componentsDisplay
									.targetItem.description
							}
						</span>
					</div>
				</div>
				<div className="outer-dividing-container">
					<div className="item-box item-box--desciption-info-height">
						<h2 className="item-box__title">Info</h2>
						{props.reduxContainerName === bugContainerName ? (
							<div className="item-box__group__field">
								<span className="item-box__group__field__type">Location:</span>
								<span className="item-box__group__field_content">
									{displayGrayedOutNoneIfEmpty(
										reduxState[props.reduxContainerName].componentsDisplay
											.targetItem.location
									)}
								</span>
							</div>
						) : null}
						<div className="item-box__group">
							<div className="item-box__group__field">
								<span className="item-box__group__field__type">
									Start Date:
								</span>
								<span className="item-box__group__field_content">
									{displayGrayedOutNoneIfEmpty(
										formatDateMMddYYYY(
											reduxState[props.reduxContainerName].componentsDisplay
												.targetItem.start_date
										)
									)}
								</span>
							</div>
							<div className="item-box__group__field">
								<span className="item-box__group__field__type">Due Date:</span>
								<span className="item-box__group__field_content">
									{displayGrayedOutNoneIfEmpty(
										formatDateMMddYYYY(
											reduxState[props.reduxContainerName].componentsDisplay
												.targetItem.due_date
										)
									)}
								</span>
							</div>
							<div className="item-box__group__field">
								<span className="item-box__group__field__type">
									Completed on:
								</span>
								<span className="item-box__group__field_content">
									{displayGrayedOutNoneIfEmpty(
										formatDateMMddYYYY(
											reduxState[props.reduxContainerName].componentsDisplay
												.targetItem.completion_date
										)
									)}
								</span>
							</div>
						</div>
						<div className="item-box__group item-box__group--right">
							<div className="item-box__group__field">
								<span className="item-box__group__field__type">Priority:</span>
								<span
									className={
										"item-box__group__field_content" +
										(reduxState[props.reduxContainerName].priorityStatusOptions
											.priorityEmptyId ===
										reduxState[props.reduxContainerName].componentsDisplay
											.targetItem.priority_id
											? " grayed-out-none"
											: "")
									}
								>
									{
										reduxState[props.reduxContainerName].componentsDisplay
											.targetItem.priority_option
									}
								</span>
							</div>
							<div className="item-box__group__field">
								<div className="item-box__group__field__centering-container">
									<span className="item-box__group__field__centering-container__type item-box__group__field__type">
										Status:
									</span>
								</div>
								<div
									className={
										"item-box__group__field__status-box" +
										getStatusBoxColorClassName()
									}
								>
									<span className="item-box__group__field__status-box__centered-content">
										{
											reduxState[props.reduxContainerName].componentsDisplay
												.targetItem.status_option
										}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}