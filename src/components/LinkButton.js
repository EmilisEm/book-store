import React from "react";
import styles from "../styles/linkButton.module.css";

const LinkButton = ({ children, onClick, className }) => {
  return (
    <button
      className={styles.linkButton + " " + className}
      type="button"
      onClick={onClick}>
      {children}
    </button>
  );
};

export default LinkButton;
