// Importing action types from the "product.type" module
import { PRODUCTS_ACTION_TYPES } from "./product.type";

// Importing the createAction function from the "reducer.utils" module located in the "../../utils/reducer" directory
import { createAction } from "../../utils/reducer/reducer.utils";

// Importing the fetchProducts function from the "fetching/fetchProducts" module located in the "../../utils/fetching" directory
import { getProducts } from "../../utils/fetching/fetchProducts";

// Action creator to initiate fetching of products
export const fetchProductsStart = () =>
  createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START);

// Action creator for successful product fetching
export const fetchCategoriesSuccess = (products) =>
  createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS, products);

// Action creator for failed product fetching
export const fetchProductsFailure = (err) =>
  createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILED, err);

// Async action creator to fetch products and handle success/failure
export const fetchProductsAsync = () => {
  return async (dispatch) => {
    dispatch(fetchProductsStart());
    try {
      const products = await getProducts();
      const sortedProds = JSON.parse(JSON.stringify(products));

      dispatch(
        fetchCategoriesSuccess({ products: products, sortedProds: sortedProds })
      );
    } catch (err) {
      dispatch(fetchProductsFailure(err));
    }
  };
};

// Action creator to sort products by price
export const sortProduct = (sortedProducts) => {
  const sortedProduct = sortedProducts.data.sort((a, b) => a.price - b.price);
  return createAction(PRODUCTS_ACTION_TYPES.SORT_PRODUCTS_BY_PRICE, {
    ...sortedProducts,
    data: sortedProduct,
  });
};

// Action creator to revert sorting and restore original order of products
export const unsortProduct = (products) => {
  return createAction(PRODUCTS_ACTION_TYPES.UNSORT_PRODUCTS, products);
};

// Action creator to save edited product details
export const saveEditProduct = (products, productToEdit, newValues) => {
  // Extract new values for the product
  const { title, price, description, rating } = newValues;

  // Find the index of the product to edit in the array
  const productIndex = products.data.findIndex(
    (product) => product.id === productToEdit.id
  );

  // Create a new product object with updated values
  const newProduct = {
    ...products.data[productIndex],
    title: title,
    price: Number(price),
    description: description,
    rating: Number(rating),
  };

  // Update the product in the array
  products.data[productIndex] = newProduct;

  // Create new copies of products for state update
  const newProducts = { ...products };
  const sortedProds = JSON.parse(JSON.stringify(newProducts));

  return createAction(PRODUCTS_ACTION_TYPES.EDIT_PRODUCTS, {
    products: newProducts,
    sortedProds: sortedProds,
  });
};

// Action creator to delete a product
export const deleteProduct = (products, productToDelete) => {
  // Filter out the product to delete from the array
  const newProductsArray = products.data.filter((product) => {
    return product.id !== productToDelete.id;
  });

  // Create new copies of products for state update
  const newProducts = { ...products.data, data: newProductsArray };
  const sortedProds = JSON.parse(JSON.stringify(newProducts));

  return createAction(PRODUCTS_ACTION_TYPES.DELETE_PRODUCT, {
    products: newProducts,
    sortedProds: sortedProds,
  });
};

// Action creator to add a new product
export const addProduct = (products, productToAdd) => {
  // Add the new product to the beginning of the array
  products.data.unshift(productToAdd);

  // Create new copies of products for state update
  const newProducts = { ...products };
  const sortedProds = JSON.parse(JSON.stringify(newProducts));

  return createAction(PRODUCTS_ACTION_TYPES.EDIT_PRODUCTS, {
    products: newProducts,
    sortedProds: sortedProds,
  });
};