import { SET_SEARCH_FILTER_SORT } from "../../actions/constants/types";

const initialState = {
	searchKeyWordString: "",
	sortByAscending: true,
	sortByTypeId: 2,
	priorityFilter: [],
	statusFilter: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case SET_SEARCH_FILTER_SORT:
			return {
				searchKeyWordString: action.searchFilterSort.searchKeyWordString,
				sortByAscending: action.searchFilterSort.sortByAscending,
				sortByTypeId: action.searchFilterSort.sortByTypeId,
				priorityFilter: action.searchFilterSort.priorityFilter,
				statusFilter: action.searchFilterSort.statusFilter,
			};
		default:
			return state;
	}
}
