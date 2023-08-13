// Import the Products component, useSelector hook, selectors, ClipLoader component, and Sort component
import Products from "../products/products.component";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../store/products/product.selector";
import { ClipLoader } from "react-spinners";
import Sort from "../sort/sort.component";
import "./homeComp.styles.scss"; // Import necessary styles

// CSS override for ClipLoader component
const override = {
  display: "block", 
  margin: "20% auto", 
};

// Define the HomeComponent component
function HomeComponent() {
  // Retrieve isLoading value from the Redux store using a selector
  const isLoading = useSelector(selectIsLoading);

  // Render the component
  return (
    <div className="home-container"> {/* Apply styles to the home container */}
      <Sort /> {/* Render the Sort component */}
      
      {/* Conditionally render ClipLoader or Products based on isLoading value */}
      {isLoading ? <ClipLoader cssOverride={override} /> : <Products />}
    </div>
  );
}

// Export the HomeComponent component as the default export
export default HomeComponent;