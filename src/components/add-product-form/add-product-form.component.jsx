// Import necessary styles
import "./add-product-form.styles.scss";

// Import required React hooks and components
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// Import action and selector functions from the product store
import { addProduct } from "../../store/products/product.action";
import { selectProductsArray } from "../../store/products/product.selector";

// Define the AddProductForm component
function AddProductForm() {
  // Define state variables for various input fields
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");

  // Retrieve the dispatch function from Redux
  const dispatch = useDispatch();

  // Retrieve the products array from the Redux store using a selector
  const products = useSelector(selectProductsArray);

  // Retrieve the navigation function from React Router
  const navigate = useNavigate();

  // Define a function to handle adding a new product
  const handelAddProduct = () => {
    // Create a new product object based on the input values
    const newProduct = {
      title,
      description,
      price: Number(price),
      rating: Number(rating),
      images: [image],
      id: Date.now(),
    };

    // Dispatch the 'addProduct' action with the new product and the existing products array
    dispatch(addProduct(products, newProduct));

    // Display a toast notification indicating successful addition
    toast(`${title} Has Been Added`);

    // Navigate to the '/allProds' route
    navigate("/allProds");
  };

  // Render the component
  return (
    <div className="form-container">
      <div className="add_prod_title">ADD NEW PRODUCT</div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setdescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image Url"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button className="add-prod-button" onClick={handelAddProduct}>
        Add Product
      </button>
    </div>
  );
}

// Export the AddProductForm component as the default export
export default AddProductForm;