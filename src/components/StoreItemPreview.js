import React from "react";
import { Link } from "react-router-dom";

const StoreItemPreview = ({ name, author, price, image, id }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h4>{author}</h4>
      <h6>{price}</h6>
      <Link to={`/store/${id}`}>More</Link>
    </div>
  );
};

export default StoreItemPreview;
