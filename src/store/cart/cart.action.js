// Importing the CART_ACTION_TYPE constant from the "cart.type" module
import { CART_ACTION_TYPE } from "./cart.type";

// Importing the createAction function from the "reducer.utils" module located in the "../../utils/reducer" directory
import { createAction } from "../../utils/reducer/reducer.utils";


// Function to add a new item to the cart or increase the quantity if already exists
export const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        // If item already exists, increase its quantity
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    // If item doesn't exist in the cart, add it with a quantity of 1
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

// Function to remove an item from the cart
export const removeCartItem = (cartItems, productToRemove) => {
    const newCartItems = cartItems.filter(
        (item) => item.id !== productToRemove.id
    );

    return newCartItems;
};

// Function to increase the quantity of an item in the cart
export const incItems = (cartItems, productToInc) => {
    return cartItems.map((cartItem) =>
        cartItem.id === productToInc.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
    );
};

// Function to decrease the quantity of an item in the cart
export const decItems = (cartItems, productToDec) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToDec.id
    );

    if (existingCartItem.quantity === 1) {
        // If item has a quantity of 1, remove it from the cart
        return cartItems.filter((item) => item.id !== productToDec.id);
    }

    // Decrease the quantity of the item by 1
    return cartItems.map((cartItem) =>
        cartItem.id === productToDec.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};

// Function to add an item to the cart and create a corresponding action
export const addItemToCart = (cartItems, product) => {
    const newCartItems = addCartItem(cartItems, product);
    return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
};

// Function to remove an item from the cart and create a corresponding action
export const removeItemFromCart = (cartItems, product) => {
    const newCartItems = removeCartItem(cartItems, product);
    return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
};

// Function to increase the quantity of an item and create a corresponding action
export const incQuantity = (cartItems, product) => {
    const newCartItems = incItems(cartItems, product);
    return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
};

// Function to decrease the quantity of an item and create a corresponding action
export const decQuantity = (cartItems, product) => {
    const newCartItems = decItems(cartItems, product);
    return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
};