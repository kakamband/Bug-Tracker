import { SET_WHICH_LIST_COMPONENTS_DISPLAY } from "../../actions/constants/types";

const initialState = {
	listContainer: false,
	listContainerMassDeleteItemsModal: false,
	listContainerCreateItemSidbar: false,
	itemContainer: false,
	itemContainerEditItemInfo: false,
	itemContainerDeleteModal: false,
	targetItem: null,
};

// Ternary operator is used to set undefined components to false since
// ...usually if one component is being set true, most others are being set false
// ...this allows passing only the components you want to display
export default function (state = initialState, action) {
	switch (action.type) {
		case SET_WHICH_LIST_COMPONENTS_DISPLAY:
			return {
				listContainer:
					action.displays.listContainer !== undefined
						? action.displays.listContainer
						: false,
				listContainerMassDeleteItemsModal:
					action.displays.listContainerMassDeleteItemsModal !== undefined
						? action.displays.listContainerMassDeleteItemsModal
						: false,
				listContainerCreateItemSidbar:
					action.displays.listContainerCreateItemSidbar !== undefined
						? action.displays.listContainerCreateItemSidbar
						: false,
				itemContainer:
					action.displays.itemContainer !== undefined
						? action.displays.itemContainer
						: false,
				itemContainerEditItemInfo:
					action.displays.itemContainerEditItemInfo !== undefined
						? action.displays.itemContainerEditItemInfo
						: false,
				itemContainerDeleteModal:
					action.displays.itemContainerDeleteModal !== undefined
						? action.displays.itemContainerDeleteModal
						: false,
				targetItem:
					action.displays.targetItem !== undefined
						? action.displays.targetItem
						: null,
			};
		default:
			return state;
	}
}
