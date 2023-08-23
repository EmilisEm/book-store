import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../assets/bookData";
import styles from "../styles/storeItemPage.module.css";
import Counter from "../components/Counter";
import Button from "../components/Button";
import DescriptionAndReview from "../components/DescriptionAndReview";

// TO DO:
// Add item not found page

const StoreItem = () => {
  const { itemId } = useParams();
  const [bookData, setBookData] = useState(null);
  const [selectedCount, setSelectedCount] = useState(1);
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    setBookData(data.find((book) => book.id === itemId));
  }, []);

  return (
    <div>
      <div className={styles.salePanel}>
        <img
          src={bookData?.img}
          alt="Picture of book"
        />
        <aside className={styles.itemAddToCartAside}>
          <h2>{bookData?.name}</h2>
          <h5>{bookData?.author}</h5>
          <h3>Price: {bookData?.price}$</h3>
          <h4>{bookData?.description}</h4>
          <div className={styles.counterAndAddToCart}>
            <div className={styles.counter}>
              <Counter
                count={selectedCount}
                setCount={setSelectedCount}
                setIsError={setIsError}
                setErrorMessage={setErrorText}
                maxCount={bookData?.inStock}
              />
            </div>
            <Button onClick={() => {}}>Add to cart</Button>
          </div>
        </aside>
      </div>
      <div className={styles.descriptionReview}>
        <DescriptionAndReview />
      </div>
      <Link to="/store">Back</Link>
    </div>
  );
};

export default StoreItem;
