import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import filterSlice from "./features/filterSlice";


const store = configureStore({
  reducer: {
    cart: cartSlice,
    filters: filterSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
