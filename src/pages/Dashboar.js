import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/dashboard.module.css";
import Button from "../components/Button";
import bookImg from "../assets/stack-books-png-6.png";
import DisplayItem from "../components/DisplayItem";
import img1 from "../assets/stock-book.jpg";
import img2 from "../assets/comicbook.jpg";
import CartItem from "../components/CartItem";
import ProductDisplay from "../components/ProductDisplay";

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
      <h2 className={styles.heading}>What we offer...</h2>
      <div className={styles.twoItemDisplay}>
        <DisplayItem
          img={img1}
          title="Hard cover books"
          desc="All the clasics and contemporary works you need"
        />
        <DisplayItem
          img={img2}
          title="Comic books"
          desc="A story to read and see"
          isReverse={true}
        />
      </div>
      <div className={styles.productDisplay}>
        <ProductDisplay title="On sale">
          <CartItem
            img={img1}
            name="Svetimas"
            auth="Albertas Kamiu"
            price={12.99}
          />
          <CartItem
            img={img1}
            name="Svetimas"
            auth="Albertas Kamiu"
            price={12.99}
          />
          <CartItem
            img={img1}
            name="Svetimas"
            auth="Albertas Kamiu"
            price={12.99}
          />
          <CartItem
            img={img1}
            name="Svetimas"
            auth="Albertas Kamiu"
            price={12.99}
          />
        </ProductDisplay>
      </div>
    </>
  );
};

export default Dashboar;
