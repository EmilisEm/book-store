import React from "react";
import { useContext } from "react";
import { CartContext } from "../App";
import { NavLink } from "react-router-dom";
import styles from "../styles/sideMenu.module.css";
import stylesNav from "../styles/nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faXmark } from "@fortawesome/free-solid-svg-icons";

const SideMenu = () => {
  const { hamburgerIsOpen, cartCount, toggleHamburger } =
    useContext(CartContext);
  return (
    <div
      style={{ transform: `${hamburgerIsOpen ? "translateX(0)" : ""}` }}
      className={styles.sideMenu}
    >
      <button onClick={toggleHamburger} type="button" className={styles.close}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <div className={stylesNav.logo}>
        <FontAwesomeIcon icon={faBook} />
        Book medium
      </div>
      <div className={styles.links}>
        <NavLink onClick={toggleHamburger} className={stylesNav.navLink} to="/">
          Home
        </NavLink>
        <NavLink
          onClick={toggleHamburger}
          className={stylesNav.navLink}
          to="/store"
        >
          Store
        </NavLink>
        <NavLink
          onClick={toggleHamburger}
          className={stylesNav.navLink}
          to="/login"
        >
          Log in
        </NavLink>
        <NavLink
          onClick={toggleHamburger}
          className={stylesNav.navLink}
          to="/signup"
        >
          Sign up
        </NavLink>
        <NavLink
          onClick={toggleHamburger}
          className={`${stylesNav.cart} ${stylesNav.navLink}`}
          to="/cart"
        >
          Cart
          <div className={stylesNav.cartCounter}>{cartCount}</div>
        </NavLink>
      </div>
    </div>
  );
};

export default SideMenu;
