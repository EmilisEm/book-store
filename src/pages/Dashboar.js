import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/dashboard.module.css";
import Button from "../components/Button";
import bookImg from "../assets/stack-books-png-6.png";

const Dashboar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.hero}>
        <img className={styles.bgImg} src={bookImg} alt="" />
        <div className={styles.textField}>
          <h2>From the classics to contemporary</h2>
          <p>
            Book shopping made simple. Buy all you want to read from one place
          </p>
          <Button
            onClick={() => {
              navigate("/store");
            }}
          >
            Shop now
          </Button>
        </div>
      </div>
    </>
  );
};

export default Dashboar;
