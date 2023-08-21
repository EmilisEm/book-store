import React from "react";
import styles from "../styles/footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.section}>
        <h4>Follow us on:</h4>
        <div className={styles.social}>
          <a href="https://www.facebook.com/">
            <FontAwesomeIcon className={styles.icon} icon={faFacebook} />
          </a>
          <a href="https://twitter.com/">
            <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
          </a>
          <a href="https://www.linkedin.com/">
            <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
          </a>
        </div>
      </div>
      <div className={styles.section + " " + styles.column}>
        <h4>Contact us:</h4>
        <a href="mailto: bookmedium@gmail.com">bookmedium@gmail.com</a>
        <a href="tel:123 035 12345">+123 035 12345</a>
      </div>
    </footer>
  );
};

export default Footer;
