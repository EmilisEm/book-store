import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faCartShopping,
  faUser,
  faBars,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../App";
import { useCookies } from "react-cookie";

const Navigation = () => {
  const { cartCount, toggleHamburger, hamburgerIsOpen } =
    useContext(CartContext);
  const [cookie, setCookie] = useCookies(["user-token"]);

  const logout = () => {
    window.localStorage.removeItem("userId");
    setCookie("user-token", "");
    console.log(cookie);
  };
  return (
    <nav className={styles.nav}>
      <div className={styles.innerNav}>
        <NavLink
          className={styles.navLink}
          to="/">
          Home
        </NavLink>
        <NavLink
          className={styles.navLink}
          to="/store">
          Store
        </NavLink>
      </div>
      <div className={styles.logo}>
        <FontAwesomeIcon icon={faBook} />
        Book medium
      </div>
      <div className={styles.auth}>
        <NavLink
          className={styles.navLink}
          to="/login">
          {!cookie["user-token"] ? (
            <FontAwesomeIcon icon={faUser} />
          ) : (
            <FontAwesomeIcon
              icon={faRightFromBracket}
              onClick={logout}
            />
          )}
        </NavLink>
        <NavLink
          className={`${styles.cart} ${styles.navLink}`}
          to="/cart">
          <FontAwesomeIcon icon={faCartShopping} />
          <div className={styles.cartCounter}>{cartCount}</div>
        </NavLink>
      </div>
      <button
        className={`${styles.navLink} ${styles.hamburger}`}
        type="button"
        onClick={(e) => {
          toggleHamburger();
        }}>
        <FontAwesomeIcon
          style={{ transform: `${hamburgerIsOpen ? "rotate(90deg)" : ""}` }}
          className={styles.hamburger}
          icon={faBars}
        />
      </button>
    </nav>
  );
};

export default Navigation;
