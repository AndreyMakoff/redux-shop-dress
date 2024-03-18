import { configureStore } from '@reduxjs/toolkit';
import slideReducer from '../features/SliderSlice';
import productsReducer from '../features/ProductsSlice';
import cartSliceReducer from '../features/CartSlice';
import authSlice from '../features/AuthSlice';

export const store = configureStore({
	reducer: {
		slide: slideReducer,
		products: productsReducer,
		cart: cartSliceReducer,
		user: authSlice,
	},
});
