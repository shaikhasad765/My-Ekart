import axios from "axios";

export const getProducts = async () => {
  try {
    const prods = await axios(
      "https://my-json-server.typicode.com/shaikhasad765/My-Ekart/products"
    );

    return prods;
  } catch (err) {
    console.log("Error In fetching");
  }
};