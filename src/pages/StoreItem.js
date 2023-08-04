import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../assets/bookData";

// TO DO:
// Add item not found page

const StoreItem = () => {
  const { itemId } = useParams();
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    setBookData(data.find((book) => book.id === itemId));
  }, []);

  return (
    <div>
      {itemId}
      {bookData?.name}
      <Link to="/store">Back</Link>
    </div>
  );
};

export default StoreItem;
