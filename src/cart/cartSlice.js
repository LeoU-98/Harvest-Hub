import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) return;
      state.push({ ...action.payload, count: 1 });
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    updateItemCount: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.count = action.payload.count;
      }
    },
    clearCart: (state) => {
      state = [];
    },
  },
});
export const { addItem, removeItem, updateItemCount, clearCart } =
  cartSlice.actions;

export function useCart() {
  const cart = useSelector((store) => store.cart);
  const totalItemsInCart = cart.length;
  const totalCartPrice = cart.reduce((total, item) => {
    return total + item.count * item.discountPrice;
  }, 0);

  return { cart, totalItemsInCart, totalCartPrice };
}

export default cartSlice.reducer;
