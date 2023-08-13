// Import the ReactComponent from the shopping-bag.svg file
import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";

// Import the necessary React module and styles
import React from "react";
import "./cart-icon.styles.scss";

// Import the selectCartCount selector and useSelector hook from the Redux store
import { selectCartCount } from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";

// Define the CartIcon component
function CartIcon() {
  // Retrieve the cartCount value from the Redux store using the selectCartCount selector
  const cartCount = useSelector(selectCartCount);

  // Render the component
  return (
    <div className="cart-icon-container">
      {/* Render the ShoppingSvg component */}
      <ShoppingSvg className="shopping-icon" />
      
      {/* Display the cartCount */}
      <span className="item-count">{cartCount}</span>
    </div>
  );
}

// Export the CartIcon component as the default export
export default CartIcon;
