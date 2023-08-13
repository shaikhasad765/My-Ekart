// Importing the Axios library
import axios from "axios";

// Async function to fetch products from the JSON server
export const getProducts = async () => {
  try {
    // Making a GET request to the JSON URL using Axios
    const response = await axios.get(
      "https://my-json-server.typicode.com/shaikhasad765/My-Ekart/products"
    );

    // Returning the response containing the fetched products
    return response.data;
  } catch (err) {
    // Handling errors if the fetching process fails
    console.log("Error in fetching products:", err.message);
    throw err; // Re-throwing the error to be handled at a higher level if needed
  }
};
