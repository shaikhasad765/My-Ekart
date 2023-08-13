// Importing the CART_ACTION_TYPE constant from the "cart.type" module
import { CART_ACTION_TYPE } from "./cart.type";

// Initial state for the cart, containing an empty array of cart items
export const CART_INITIAL_STATE = {
  cartItems: [],
};

// Reducer function responsible for managing the cart state
export const cartReducer = (state = CART_INITIAL_STATE, action) => {
  // Destructuring the "type" and "payload" properties from the action
  const { type, payload } = action;

  // Switching between different action types to update the state accordingly
  switch (type) {
    // If the action type is SET_CART_ITEMS
    case CART_ACTION_TYPE.SET_CART_ITEMS: {
      // Returning a new state object with updated cart items using the payload
      return {
        ...state,
        cartItems: payload,
      };
    }

    // If the action type doesn't match any cases, return the current state
    default:
      return state;
  }
};
