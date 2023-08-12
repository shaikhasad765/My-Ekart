import "./cart-items.styles.scss";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  removeItemFromCart,
  incQuantity,
  decQuantity,
} from "../../store/cart/cart.action";
import { toast } from "react-toastify";

function CartItem({ cartItem }) {
  console.log("Cart Items",cartItem); 
  const { title, images, price, quantity } = cartItem;

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true); // Trigger animation when component mounts
  }, []);

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handelDelete = () => {
    dispatch(removeItemFromCart(cartItems, cartItem));
    toast("Item Removed!");
  };

  const handelIncrease = () => {
    dispatch(incQuantity(cartItems, cartItem));
    toast("Item Added!");
  };

  const handelDecrease = () => {
    dispatch(decQuantity(cartItems, cartItem));
    toast("Item Removed!");
  };

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

export default CartItem;