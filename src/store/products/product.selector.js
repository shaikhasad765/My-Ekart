// Importing the createSelector function from the "reselect" library
import { createSelector } from "reselect";

// Selector function to access the products state within the reducer
const selectProductsReducer = (state) => state.products;

// Selector to access the "products" array from the products state
export const selectProductsArray = createSelector(
  [selectProductsReducer],
  (productsSlice) => productsSlice.products
);

// Selector to access the "sortedProds" array from the products state
export const selectSortedProds = createSelector(
  [selectProductsReducer],
  (productsSlice) => productsSlice.sortedProds
);

// Selector to access the "isLoading" property from the products state
export const selectIsLoading = createSelector(
  [selectProductsReducer],
  (productsSlice) => productsSlice.isLoading
);

// Selector to access the "isSorted" property from the products state
export const selectIsSorted = createSelector(
  [selectProductsReducer],
  (productsSlice) => productsSlice.isSorted
);