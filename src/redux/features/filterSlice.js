import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: "",
  rating: 0,
  outOfStock: false,
  searchQuery: "",
  clearFilter: false,
};

const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    sort: (state, { payload }) => {
      state.sort = payload;
    },
    rating: (state, { payload }) => {
      state.rating = payload;
    },
    outOfStock: (state, { payload }) => {
      state.outOfStock = payload;
    },
    search: (state, { payload }) => {
      state.searchQuery = payload;
    },

    clearFilter: () => {
      return initialState;
    },
  },
});

export const { sort, rating, outOfStock, search, clearFilter } =
  filterSlice.actions;

export default filterSlice.reducer;
