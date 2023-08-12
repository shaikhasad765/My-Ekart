import React, { useEffect } from "react";
import Landingpage from "../../components/Landingpage/Landingpage.component";
import { useDispatch } from "react-redux";
import { fetchProductsAsync } from "../../store/products/product.action";

function Home() {
  const dispatch = useDispatch();

  //Fetching product on application loading
  useEffect(() => {
    const getProducts = async () => {
      dispatch(fetchProductsAsync());
    };
    getProducts();
  }, [dispatch]); // Include dispatch in the dependency array
  

  return <Landingpage />;
}

export default Home;