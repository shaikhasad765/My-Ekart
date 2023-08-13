// Import necessary modules and styles
import "./product-detail.component.scss";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectProductsArray } from "../../store/products/product.selector";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";
import { toast } from "react-toastify";

// Define the ProductDetail component
function ProductDetail() {
    // Get the 'id' parameter from the URL using useParams
    const { id } = useParams();
    const products = useSelector(selectProductsArray);
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    // Filter the product based on the 'id' parameter
    const product = products.data.filter(
        (product) => Number(id) === product.id
    )[0];

    // Function to add the product to the cart
    const addProductToCart = () => {
        dispatch(addItemToCart(cartItems, product));
        toast("Product Added to cart!");
    };

    // Render the component
    return (
        <div className="product-details">
            <div className="image-container">
                <img src={product.images[0]} alt={product.title} />
            </div>
            <div className="details-title-price-buy">
                <div className="title">
                    <h3>{product.title}</h3>
                </div>
                <div className="details">{product.description}</div>
                <div className="price">Rs. {product.price}</div>
                <div className="addToCart">
                    <button onClick={addProductToCart} className="add-prod-button">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}

// Export the ProductDetail component as the default export
export default ProductDetail;