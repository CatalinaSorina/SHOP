import * as types from './type';

export const addItem = (item) => {
	//   console.log("Action creator addItem: ", item);
	return {
		type: types.ADD_TO_BASKET,
		payload: item
	};
};

export const addQtyToItem = (itemId) => {
	return {
		type: types.ADD_QTY_TO_ITEM,
		payload: itemId
	};
};

export const removeItem = (itemId) => {
	//   console.log("Action creator removeItem: ", item);
	return {
		type: types.REMOVE_ITEM,
		payload: itemId
	};
};
