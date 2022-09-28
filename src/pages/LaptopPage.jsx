import React from "react";
import Laptop from "../components/Laptop";

const LaptopPage = () => {
  return (
    <div className="products__container">
      <div className="product__filter"></div>

      <div className="product__container">
        <Laptop></Laptop>
      </div>
    </div>
  );
};

export default LaptopPage;
