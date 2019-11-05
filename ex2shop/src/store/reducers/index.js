import * as types from '../actions/type';
// import axios from "axios";

const initialState = {
	basket: [],
	price: 0,

	shop: [
		{
			id: 1,
			imageUrl: 'https://d3c7o8x2i12pye.cloudfront.net/alex/test/Cleaner1.png',
			name: 'Clean powder 1',
			price: 2.99
		},
		{
			id: 2,
			imageUrl: 'https://d3c7o8x2i12pye.cloudfront.net/alex/test/Cleaner2.png',
			name: 'Clean powder 2',
			price: 1.99
		},
		{
			id: 3,
			imageUrl: 'https://d3c7o8x2i12pye.cloudfront.net/alex/test/Cleaner3.png',
			name: 'Clean powder 3',
			price: 1.79
		},
		{
			id: 4,
			imageUrl: 'https://d3c7o8x2i12pye.cloudfront.net/alex/test/Cleaner4.png',
			name: 'Clean powder 4',
			price: 2.34
		},
		{
			id: 5,
			imageUrl: 'https://d3c7o8x2i12pye.cloudfront.net/alex/test/Cleaner5.png',
			name: 'Clean powder 5',
			price: 5.34
		}
	]
};

// const getItemsFromApi = async () => {
//   const res = await axios.get(
//     "https://d3c7o8x2i12pye.cloudfront.net/alex/test/cleaners.json"
//   );
//   console.log(res.data);
//   return res.data;
// };

const shopReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.ADD_TO_BASKET:
			const basket = [ ...state.basket, action.payload ];
			const newPrice = state.price + action.payload.price;
			return {
				...state,
				basket: basket,
				price: newPrice
			};

		case types.ADD_QTY_TO_ITEM:
			let price = 0;
			const basketItemQty = state.basket.map((item) => {
				if (item.id === action.payload) {
					item.qty++;
					price += item.price;
				}
			});
			return {
				...state,
				basket: basketItemQty,
				price: price
			};

		case types.REMOVE_ITEM:
			const basketWithItemRemoved = state.basket.filter((item) => item.id !== action.payload);
			return {
				...state,
				basket: basketWithItemRemoved
			};
		default:
			return state;
	}
};

export default shopReducer;
