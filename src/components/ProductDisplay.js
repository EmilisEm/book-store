import React from "react";
import styles from "../styles/productDisplay.module.css";
import LinkButton from "./LinkButton";
const ProductDisplay = ({ children, title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2>{title}</h2>
        <LinkButton onClick={() => {}}>Go to store</LinkButton>
      </div>
      <div className={styles.grid}>{children}</div>;
    </div>
  );
};

export default ProductDisplay;
