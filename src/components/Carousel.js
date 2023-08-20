import React, { useEffect, useRef } from "react";
import styles from "../styles/Carousel.module.css";
import { register } from "swiper/element/bundle";

register();

const Carousel = ({ children }) => {
  const swiperRef = useRef(null);
  useEffect(() => {
    console.log(document.querySelectorAll(".swiper-button-prev"));
  }, []);
  return (
    <swiper-container
      centered-slides="true"
      slides-per-view="3"
      mousewheel="true"
      navigation="true"
      ref={swiperRef}
      className={styles.carousel}
    >
      {children.map((element) => {
        return (
          <swiper-slide className={styles.carouselElement}>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {element}
            </div>
          </swiper-slide>
        );
      })}
    </swiper-container>
  );
};

export default Carousel;
