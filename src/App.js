// Importing styles from a SCSS file
import "./app.styles.scss";

// Importing necessary components and elements
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import AddProd from "./routes/addProductForm/addProd.component";
import Cart from "./routes/cart/cart.component";
import Landingpage from "./components/Landingpage/Landingpage.component";
import ProductDetail from "./components/product-detail/product-detail.component";
import { ToastContainer } from "react-toastify";
import HomeComponent from "./components/home-component/home.component";
import Footer from "./routes/Footer/Footer";

// The main App component
function App() {
  return (
    <div>
      {/* Define the routes for your application */}
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="addProd" element={<AddProd />} />
          <Route path="cart" element={<Cart />} />
          <Route path="allProds" element={<HomeComponent />} />
          <Route path="landpg" element={<Landingpage />} />
          <Route path="product/:id" element={<ProductDetail />} />
        </Route>
      </Routes>

      {/* Include the Footer component */}
      <Footer/>

      {/* Display toast notifications using ToastContainer */}
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        // theme="dark"
      />
    </div>
  );
}

// Exporting the App component as the default export
export default App;
