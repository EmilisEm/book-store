import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/displayItem.module.css";
import LinkButton from "./LinkButton";

const DisplayItem = ({ img, title, desc, isReverse }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.display}>
        <div
          className={
            isReverse
              ? styles.displayTextReverse + " " + styles.displayText
              : styles.displayText
          }
        >
          <h2>{title}</h2>
          <p>{desc}</p>
          <LinkButton onClick={() => navigate("/store")}>Shop now</LinkButton>
        </div>
        <img
          src={img}
          className={
            isReverse
              ? styles.displayImageReverse + " " + styles.displayImage
              : styles.displayImage
          }
        />
      </div>
    </div>
  );
};

export default DisplayItem;
