// Import necessary modules, styles, and images
import "./product-item.styles.scss";
import ReactStars from "react-stars";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { selectProductsArray } from "../../store/products/product.selector";
import { useNavigate } from "react-router-dom";
import editimg from "../../assets/Images/edit.png";
import delimg from "../../assets/Images/delete.png";
import cartimg from "../../assets/Images/cart.png";

// Import necessary actions
import {
  saveEditProduct,
  deleteProduct,
} from "../../store/products/product.action";
import { addItemToCart } from "../../store/cart/cart.action";

// Define the ProductItem component
function ProductItem({ product }) {
  const { title, price, images, rating, description, id } = product;

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true); // Trigger animation when component mounts
  }, []);

  // For Edit Cart Item
  const [beingEdited, setBeingEdited] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newPrice, setNewPrice] = useState(price);
  const [newRating, setNewRating] = useState(rating);
  const [newDescription, setNewnewDescription] = useState(description);

  const handelTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handelPriceChange = (e) => {
    setNewPrice(e.target.value);
  };

  const handelRatingChange = (e) => {
    setNewRating(e.target.value);
  };

  const handelDescChange = (e) => {
    setNewnewDescription(e.target.value);
  };

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const products = useSelector(selectProductsArray);

  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, product));
    toast("Product Added to cart!");
  };

  const handelSave = () => {
    const newValues = {
      title: newTitle,
      price: newPrice,
      rating: newRating,
      description: newDescription,
    };

    dispatch(saveEditProduct(products, product, newValues));
    toast("Product Updated");
    setBeingEdited(false);
  };

  const handelDelete = () => {
    dispatch(deleteProduct(products, product));
    toast("Product Deleted");
  };

  const navigate = useNavigate();

  const handelShowDetails = () => {
    navigate(`/product/${id}`);
  };

  // Render the component
  return (
    <div className={`product-card ${isLoaded ? "loaded" : ""}`}>
      <div className="image-price-rating-container">
        <img onClick={handelShowDetails} src={images[0]} alt={title} />

        <div className="title-rating-price">
          <div className="title-container">
            {beingEdited ? (
              <input value={newTitle} onChange={(e) => handelTitleChange(e)} />
            ) : (
              <h3>{title}</h3>
            )}
          </div>
          <div className="price-container">
            <p>
              RS. 
              {beingEdited ? (
                <input
                  value={newPrice}
                  onChange={(e) => handelPriceChange(e)}
                />
              ) : (
                price
              )}
            </p>
          </div>
          <div className="rating-container">
            {beingEdited ? (
              <input
                value={newRating}
                onChange={(e) => handelRatingChange(e)}
              />
            ) : (
              <ReactStars
                count={5}
                size={28}
                value={rating}
                color2={"#ffd700"}
              />
            )}
          </div>
        </div>
      </div>

      <div className="desc-actions">
        <div className="description-container">
          {beingEdited ? (
            <textarea
              value={newDescription}
              rows="5"
              cols="30"
              onChange={(e) => handelDescChange(e)}
            />
          ) : (
            <p>{description}</p>
          )}
        </div>
        <div>
          {beingEdited ? (
            <div className="action-container">
              <div className="action-icon" onClick={handelSave}>
                <p>Save</p>
              </div>
              <div
                className="action-icon"
                onClick={() => setBeingEdited(false)}>
                <p>Cancel</p>
              </div>
            </div>
          ) : (
            <div className="action-container">
              <div className="action-icon" onClick={() => setBeingEdited(true)}>
                <img src={editimg} alt="edit" />
              </div>
              <div className="action-icon" onClick={handelDelete}>
                <img src={delimg} alt="delete" />
              </div>
              <div className="action-icon" onClick={addProductToCart}>
                <img src={cartimg} alt="addToCart" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Export the ProductItem component as the default export
export default ProductItem;