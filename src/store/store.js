// Importing necessary functions from Redux and related packages
import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

// Importing Redux logger middleware
import { logger } from "redux-logger";

// Importing the root reducer
import { rootReducer } from "./root-reducer";

// Configuration for Redux-persist
const persistConfig = {
  key: "root", // Key for the persisted state in storage
  storage, // Storage engine (localStorage by default)
};

// Creating a persisted reducer with Redux-persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Defining middlewares to apply to the store
const middleWares = [
  process.env.NODE_ENV !== "production" && logger, // Conditionally apply logger middleware in non-production environment
  thunk, // Thunk middleware for handling async actions
].filter(Boolean);

// Enhancing the store with Redux DevTools extension if available
const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// Composing enhancers, including middleware and Redux DevTools extension
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// Creating the Redux store with the persisted reducer and composed enhancers
export const store = createStore(
  persistedReducer,
  undefined, // Initial state
  composedEnhancers
);

// Creating a persistor for the Redux-persist to persist the store
export const persistor = persistStore(store);
