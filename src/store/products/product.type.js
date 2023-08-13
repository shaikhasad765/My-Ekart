// Object containing various action types related to products
export const PRODUCTS_ACTION_TYPES = {
  // Action type for initiating the fetching of products
  FETCH_PRODUCTS_START: "products/FETCH_PRODUCTS_START",
  
  // Action type for successful product fetching
  FETCH_PRODUCTS_SUCCESS: "products/FETCH_PRODUCTS_SUCCESS",
  
  // Action type for failed product fetching
  FETCH_PRODUCTS_FAILED: "products/FETCH_PRODUCTS_FAILED",
  
  // Action type for sorting products by price
  SORT_PRODUCTS_BY_PRICE: "products/SORT_PRODUCTS_BY_PRICE",
  
  // Action type for reverting sorting and restoring original order of products
  UNSORT_PRODUCTS: "products/UNSORT_PRODUCTS",
  
  // Action type for editing products
  EDIT_PRODUCTS: "products/EDIT_PRODUCTS",
  
  // Action type for deleting a product
  DELETE_PRODUCT: "product/DELETE_PRODUCT",
  
  // Action type for adding a new product
  ADD_PRODUCT: "product/ADD_PRODUCT",
};
