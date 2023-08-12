import "./navigation.styles.scss";
import React, {useRef, useEffect} from "react";

import { Outlet, Link, NavLink } from "react-router-dom";
import logo from "../../assets/Images/eco-logo.png";

import CartIcon from "../../components/cart-icon/cart-icon.component";
function Navigation() {

  const menuRef = useRef(null);
  const headerRef = useRef(null);

  // Toggleing Actions
  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

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

  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

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

  return (
    <>
      <div className="navBar" ref={headerRef}>

        <div className="sectionOne">
          <Link className="navLinks" to="landpg">
            <img src={logo} alt="logo" />
              <h2 className="logo">MY-EKART</h2>
          </Link>
        </div>

        <div className="sectionMid" ref={menuRef} onClick={menuToggle}>
          <ul className="menu">
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

        <div className="sectionTwo">
          <Link className="navLinks" to="cart">
            <CartIcon />
          </Link>
        </div>

      </div>
      <Outlet />
    </>
  );
}

export default Navigation;