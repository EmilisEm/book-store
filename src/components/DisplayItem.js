import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/displayItem.module.css";
import LinkButton from "./LinkButton";
import { useInView } from "react-intersection-observer";

const DisplayItem = ({ img, title, desc, isReverse }) => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-30%",
  });
  return (
    <div
      ref={ref}
      className={`${styles.container} ${inView ? styles.inView : ""}`}>
      <div className={styles.display}>
        <div
          className={
            isReverse
              ? styles.displayTextReverse + " " + styles.displayText
              : styles.displayText
          }>
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
