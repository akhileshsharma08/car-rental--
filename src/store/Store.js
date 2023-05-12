
import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from './cartSlice';
import carReducer from './productSlice';
const store = configureStore({
    reducer: {
        // cart: cartReducer,
        car: carReducer,
    },
});

export default store;
