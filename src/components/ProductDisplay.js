import React from "react";
import styles from "../styles/productDisplay.module.css";
import LinkButton from "./LinkButton";
import { useInView } from "react-intersection-observer";

const ProductDisplay = ({ children, title }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-30%",
  });
  return (
    <div
      ref={ref}
      className={styles.container}>
      <div className={styles.textContainer}>
        <h2>{title}</h2>
        <LinkButton onClick={() => {}}>Go to store</LinkButton>
      </div>
      <div className={`${styles.grid} ${inView ? styles.inView : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default ProductDisplay;
