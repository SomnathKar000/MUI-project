import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../utils/cartItems";

const initialState = {
  cartItems: cartItems,
  total: 0,
  amount: 0,
  isLoading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
});

export default cartSlice.reducer;
