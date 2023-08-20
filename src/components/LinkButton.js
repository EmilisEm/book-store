import React from "react";
import styles from "../styles/linkButton.module.css";

const LinkButton = ({ children, onClick }) => {
  return (
    <button className={styles.linkButton} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default LinkButton;
