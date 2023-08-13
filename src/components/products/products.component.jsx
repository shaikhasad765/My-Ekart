// Importing the necessary modules from React and Redux for the component
import React from "react";
import { useSelector } from "react-redux";

// Importing custom selector functions from the product.selector module
import {
  selectProductsArray,
  selectSortedProds,
  selectIsSorted
} from "../../store/products/product.selector";

// Importing the ProductItem component that will be used to render individual product items
import ProductItem from "../product-item/product-item.component";


function Products() {
  // Using useSelector to retrieve data from the Redux store
  const products = useSelector(selectProductsArray);
  const sortedProducts = useSelector(selectSortedProds);
  const isSorted = useSelector(selectIsSorted);

  // Extracting the array of products from the retrieved data
  const productsArray = products.data;

  return (
    <>
      {/* Conditional rendering based on whether the products are sorted */}
      {isSorted
        ? // If products are sorted, map through sortedProducts
          sortedProducts.data.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        : // If products are not sorted, map through productsArray
          productsArray &&
          productsArray.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
    </>
  );
}

// Export
export default Products;