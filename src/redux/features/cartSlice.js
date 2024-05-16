import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.cartItems = [...state.cartItems,{ ...payload,quantity:1}];
    },
    removeFromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((itm) => {
        return itm.id !== payload;
      });
    },
    changeCartQty:(state,{payload})=>{
      state.cartItems= state.cartItems.filter((c) =>
        c.id === payload.id ? (c.quantity = payload.quantity) : c.quantity
    )},
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart,removeFromCart,clearCart,changeCartQty } = cartSlice.actions;
export default cartSlice.reducer;
