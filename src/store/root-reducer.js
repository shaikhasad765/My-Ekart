// Importing the combineReducers function from Redux
import { combineReducers } from "redux";

// Importing individual reducers for products and cart
import { productsReducer } from "./products/product.reducer";
import { cartReducer } from "./cart/cart.reducer";

// Combining the individual reducers into a single root reducer
export const rootReducer = combineReducers({
  // Defining how different parts of the state are managed by their respective reducers
  products: productsReducer, // The products state managed by productsReducer
  cart: cartReducer, // The cart state managed by cartReducer
});
