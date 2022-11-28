import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice";
import CartUiSlice from "./shopping-cart/CartUiSlice";

const Store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUi: CartUiSlice.reducer,
  },
});

export default Store;