// Importing React, useEffect hook, Landingpage component, useDispatch hook, and fetchProductsAsync action
import React, { useEffect } from "react";
import Landingpage from "../../components/Landingpage/Landingpage.component"; // Importing the Landingpage component
import { useDispatch } from "react-redux"; // Importing the useDispatch hook
import { fetchProductsAsync } from "../../store/products/product.action"; // Importing the fetchProductsAsync action

// Defining the Home component
function Home() {
  const dispatch = useDispatch(); // Creating a dispatch function to send actions to the store

  // Fetching products on application loading
  useEffect(() => {
    // Define an asynchronous function to fetch products
    const getProducts = async () => {
      dispatch(fetchProductsAsync()); // Dispatching the fetchProductsAsync action to load products
    };

    getProducts(); // Call the getProducts function to trigger the product fetch
  }, [dispatch]); // Include dispatch in the dependency array

  // Rendering the Landingpage component
  return <Landingpage />;
}

export default Home; // Exporting the Home component