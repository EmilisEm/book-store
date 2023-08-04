import React from "react";
import data from "../assets/bookData";
import StoreItemPreview from "../components/StoreItemPreview";
const Store = () => {
  return (
    <div>
      {data.map((item) => {
        return <StoreItemPreview {...item} key={item.id} />;
      })}
    </div>
  );
};

export default Store;
