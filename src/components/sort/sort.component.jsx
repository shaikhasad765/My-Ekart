// Importing necessary styles and external libraries
import "./sort.styles.scss"; // Importing styles for the Sort component
import { toast } from "react-toastify"; // Importing toast notifications
import "react-toastify/dist/ReactToastify.css"; // Importing toast styles
import { useDispatch, useSelector } from "react-redux"; // Importing Redux hooks
import {
  selectProductsArray, // Importing selector to access products array from the Redux store
  selectIsSorted, // Importing selector to check if products are sorted
  selectSortedProds, // Importing selector to access sorted products from the Redux store
} from "../../store/products/product.selector"; // Importing selectors for products
import {
  sortProduct, // Importing action to sort products
  unsortProduct, // Importing action to unsort products
} from "../../store/products/product.action"; // Importing actions for products

// Defining the Sort component
function Sort() {
  // Using Redux hooks to access relevant data from the store
  const products = useSelector(selectProductsArray); // Array of products
  const sortedProds = useSelector(selectSortedProds); // Array of sorted products
  const isSorted = useSelector(selectIsSorted); // Flag indicating whether products are sorted

  const dispatch = useDispatch(); // Creating a dispatch function to send actions to the store

  // Handling the sorting functionality
  const handelSort = () => {
    if (!isSorted) {
      dispatch(sortProduct(sortedProds)); // Dispatching action to sort products
      toast("Products Sorted!"); // Displaying a toast notification
    } else {
      dispatch(unsortProduct(products)); // Dispatching action to unsort products
      toast("Products Unsorted!"); // Displaying a toast notification
    }
  };

  // Rendering the Sort button with conditional text based on sorting status
  return (
    <div onClick={handelSort} className={"sort-btn" + (isSorted ? " sorted" : "")}>
      {isSorted ? <p>X Remove Sort</p> : <p>Sort by price</p>}
    </div>
  );
}

export default Sort; // Exporting the Sort component
