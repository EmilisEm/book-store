import React from "react";
import styles from "../styles/Button.module.css";

const Button = ({ children, onClick, type, className }) => {
  return (
    <button
      onClick={onClick}
      type={type ? type : "button"}
      className={styles.button + " " + className}>
      {children}
    </button>
  );
};

export default Button;
