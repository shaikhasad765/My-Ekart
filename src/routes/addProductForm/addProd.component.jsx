// Importing React and required components
import React from "react";
import AddProductForm from "../../components/add-product-form/add-product-form.component"; // Importing the AddProductForm component
import "./addProd.styles.scss"; // Importing styles for the AddProd component

// Defining the AddProd component
function AddProd() {
  // Rendering the AddProductForm component within a container
  return (
    <div className="formContainer">
      <AddProductForm /> {/* Rendering the AddProductForm component */}
    </div>
  );
}

export default AddProd; // Exporting the AddProd component