// Importing styles, React features, and components
import "./navigation.styles.scss"; // Importing styles for the Navigation component
import React, { useRef, useEffect } from "react"; // Importing React and hooks
import { Outlet, Link, NavLink } from "react-router-dom"; // Importing components from 'react-router-dom'
import logo from "../../assets/Images/eco-logo.png"; // Importing the logo image
import CartIcon from "../../components/cart-icon/cart-icon.component"; // Importing the CartIcon component

// Defining the Navigation component
function Navigation() {
  // Creating refs for the menu and header
  const menuRef = useRef(null);
  const headerRef = useRef(null);

  // Toggling menu active state
  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  // Navigation links
  const nav__links = [
    {
      path: "landpg",
      display: "Home",
    },
    {
      path: "allProds",
      display: "Shop",
    },
    {
      path: "addProd",
      display: "Add Product",
    },
  ];

  // Handling sticky header effect
  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  // Function to apply sticky header effect
  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  // Rendering the Navigation component
  return (
    <>
      <div className="navBar" ref={headerRef}>
        {/* Section One */}
        <div className="sectionOne">
          <Link className="navLinks" to="landpg">
            <img src={logo} alt="logo" />
            <h2 className="logo">MY-EKART</h2>
          </Link>
        </div>

        {/* Section Mid */}
        <div className="sectionMid" ref={menuRef} onClick={menuToggle}>
          <ul className="menu">
            {/* Mapping through navigation links */}
            {nav__links.map((item, index) => (
              <li className="nav__item" key={index}>
                <NavLink 
                  to={item.path}
                  className={(navClass) => 
                    navClass.isActive ? "nav__active" : ""
                  }>
                  {item.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Section Two */}
        <div className="sectionTwo">
          <Link className="navLinks" to="cart">
            <CartIcon />
          </Link>
        </div>
      </div>
      
      <Outlet /> {/* Rendering nested routes */}
    </>
  );
}

export default Navigation; // Exporting the Navigation component