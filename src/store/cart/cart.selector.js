// Importing the createSelector function from the "reselect" library
import { createSelector } from "reselect";

// Selector function to access the cart state within the reducer
const selectCartReducer = (state) => state.cart;

// Selector function to extract the cart items from the cart state
export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

// Selector function to calculate the total count of items in the cart
export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

// Selector function to calculate the total price of items in the cart
export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    )
);