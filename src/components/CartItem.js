import React from "react";
import styles from "../styles/CartItem.module.css";
import { useNavigate } from "react-router-dom";
import LinkButton from "./LinkButton";
const CartItem = ({ img, name, auth, price, itemId, url }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.cartItemContainer}>
      <img className={styles.cartItemImg} src={img} />
      <h3 onClick={() => navigate("/store")}>{name}</h3>
      <h5>{auth}</h5>
      <h4>{price}$</h4>
      <LinkButton onClick={() => navigate(url)}>Add to cart</LinkButton>
    </div>
  );
};

export default CartItem;
