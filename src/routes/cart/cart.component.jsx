// Importing the necessary components and styles
import CartItem from "../../components/cart-items/cart-items.component"; // Importing the CartItem component
import "./cart.styles.scss"; // Importing styles for the Cart component

// Importing selectors and Redux hook
import {
  selectCartItems, // Selector for cart items
  selectCartTotal, // Selector for cart total
} from "../../store/cart/cart.selector"; // Importing cart selectors
import { useSelector } from "react-redux"; // Importing the useSelector hook from React Redux

// Defining the Cart component
const Cart = () => {
  // Using selectors to retrieve cart items and total from the Redux store
  const cartItems = useSelector(selectCartItems); // Array of cart items
  const cartTotal = useSelector(selectCartTotal); // Total price of items in the cart

  // Rendering the cart contents
  return (
    <div className="checkout-container">
      {/* Cart header */}
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {/* Mapping through cart items and rendering CartItem components */}
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}

      {/* Displaying the total price of items in the cart */}
      <span className="total">Total: Rs {cartTotal}</span>
    </div>
  );
};

export default Cart; // Exporting the Cart component