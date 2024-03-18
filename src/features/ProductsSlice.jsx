import { createSlice } from '@reduxjs/toolkit';
import { storeData } from '../assets/data/storeData';

const producstSlice = createSlice({
	name: 'products',
	initialState: {
		filteredProducts:
			JSON.parse(sessionStorage.getItem('filteredData')) || storeData,
		singleProduct:
			JSON.parse(sessionStorage.getItem('oneProduct')) || storeData,
	},
	reducers: {
		filterProducts(state, action) {
			try {
				const filter = storeData.filter(
					(product) => product.type === action.payload
				);
				// console.log('filter', filter);
				state.filteredProducts = filter;

				const saveState = JSON.stringify(filter);
				sessionStorage.setItem('filteredData', saveState);
			} catch (err) {
				return err;
			}
		},
		singleCardProduct(state, action) {
			try {
				const oneProduct = storeData.filter(
					(product) => product.id === action.payload
				);

				state.singleProduct = oneProduct;
				const saveState = JSON.stringify(oneProduct);
				sessionStorage.setItem('singleProduct', saveState);
				// console.log('oneProduct', oneProduct);
			} catch (err) {
				return err;
			}
		},
	},
});

export const { filterProducts, singleCardProduct } = producstSlice.actions;
export default producstSlice.reducer;
