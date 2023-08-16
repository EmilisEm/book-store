import React from "react";
import styles from "../styles/Button.module.css";

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} type="button" className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
