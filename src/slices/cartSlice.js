import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { extractPriceDetails } from "../utils/helpers";

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
  const totalItemsInCart = cart?.length;

  const totalCartPriceCurrency = extractPriceDetails(
    cart[0]?.discountPrice,
  ).currencyOnly;
  const totalCartPriceNumber = cart
    .reduce((total, item) => {
      const { numberOnly } = extractPriceDetails(item?.discountPrice);
      return total + item.count * numberOnly;
    }, 0)
    .toFixed(2)
    .replace(/\.?0+$/, "");

  return {
    cart,
    totalItemsInCart,
    totalCartPriceCurrency,
    totalCartPriceNumber,
  };
}

export default cartSlice.reducer;
