// Import necessary styles
import "./cart-items.styles.scss";

// Import React hooks and components
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Import selectors and actions from the cart store
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  removeItemFromCart,
  incQuantity,
  decQuantity,
} from "../../store/cart/cart.action";

// Import the toast component for notifications
import { toast } from "react-toastify";

// Define the CartItem component
function CartItem({ cartItem }) {
  // Destructure properties from the cartItem
  const { title, images, price, quantity } = cartItem;

  // State to manage the loading animation
  const [isLoaded, setIsLoaded] = useState(false);

  // Run the effect when the component mounts
  useEffect(() => {
    setIsLoaded(true); // Trigger animation when component mounts
  }, []);

  // Retrieve the dispatch function from Redux
  const dispatch = useDispatch();

  // Retrieve the cartItems array from the Redux store using a selector
  const cartItems = useSelector(selectCartItems);

  // Function to handle item deletion
  const handelDelete = () => {
    dispatch(removeItemFromCart(cartItems, cartItem)); // Dispatch removeItemFromCart action
    toast("Item Removed!"); // Display a toast notification
  };

  // Function to handle quantity increase
  const handelIncrease = () => {
    dispatch(incQuantity(cartItems, cartItem)); // Dispatch incQuantity action
    toast("Item Added!"); // Display a toast notification
  };

  // Function to handle quantity decrease
  const handelDecrease = () => {
    dispatch(decQuantity(cartItems, cartItem)); // Dispatch decQuantity action
    toast("Item Removed!"); // Display a toast notification
  };

  // Render the component
  return (
    <div className={`checkout-item-container ${isLoaded ? "loaded" : ""}`}>
      <div className="image-container">
        <img src={images[0]} alt={`${title}`} />
      </div>
      <span className="name"> {`${title}`} </span>
      <span className="quantity">
        <div className="arrow" onClick={handelDecrease}>
          &#8722;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handelIncrease}>
          &#43;
        </div>
      </span>
      <span className="price"> {price}</span>
      <div className="remove-button" onClick={handelDelete}>
        <p>Remove</p>
      </div>
    </div>
  );
}

// Export the CartItem component as the default export
export default CartItem;