import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { formatDateMMddYYYY } from "../../../../utils/dateUtils";

import "../../../../SCSS/projects/viewProject/displayProjectTable.scss";

export default function DisplayProjectInfo() {
	const reduxState = useSelector((state) => state);
	const dispatch = useDispatch();

	const [projectInfo, setProjectInfo] = useState({
		description: reduxState.projectComponentsDisplay.targetProject.description,
		priorityId: reduxState.projectComponentsDisplay.targetProject.p_priority_id,
		priorityOption:
			reduxState.projectComponentsDisplay.targetProject.p_priority_option,
		statusId: reduxState.projectComponentsDisplay.targetProject.p_status_id,
		statusOption:
			reduxState.projectComponentsDisplay.targetProject.p_status_option,
		startDate: formatDateMMddYYYY(
			reduxState.projectComponentsDisplay.targetProject.start_date
		),
		dueDate: formatDateMMddYYYY(
			reduxState.projectComponentsDisplay.targetProject.due_date
		),
		completionDate: formatDateMMddYYYY(
			reduxState.projectComponentsDisplay.targetProject.completion_date
		),
	});

	return (
		<table className="display-edit-project-table">
			<tbody>
				<tr>
					<td className="display-edit-project-table__data">
						<div className="project-box">
							<h2 className="project-box__title">Description</h2>
							<span className="project-box__description">
								{projectInfo.description}
							</span>
						</div>
					</td>
					<td className="display-edit-project-table__data">
						<div className="project-box">
							<h2 className="project-box__title">Info</h2>
							<div className="project-box__group">
								<div className="project-box__group__field">
									<span className="project-box__group__field__type">Priority:</span>
									<span className="project-box__group__field_content">
										{projectInfo.priorityOption}
									</span>
								</div>
								<div className="project-box__group__field">
									<span className="project-box__group__field__type">Status:</span>
									<span className="project-box__group__field_content">
										{projectInfo.statusOption}
									</span>
								</div>
							</div>
							<div className="project-box__group">
								<div className="project-box__group__field">
									<span className="project-box__group__field__type">Start Date:</span>
									<span className="project-box__group__field_content">
										{projectInfo.startDate}
									</span>
								</div>
								<div className="project-box__group__field">
									<span className="project-box__group__field__type">Due Date:</span>
									<span className="project-box__group__field_content">
										{projectInfo.dueDate}
									</span>
								</div>
								{projectInfo.completionDate === null ? null : (
									<div className="project-box__group__field">
										<span className="project-box__group__field__type">
											Completed on:
										</span>
										<span className="project-box__group__field_content">
											{projectInfo.completionDate}
										</span>
									</div>
								)}
							</div>
						</div>
					</td>
					<td className="display-edit-project-table__data">
						<div className="project-box">
							<h2 className="project-box__title">Bugs</h2>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	);
}
