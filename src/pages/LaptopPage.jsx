import React from "react";
import Laptop from "../components/Laptop";
import LaptopFilter from "../components/LaptopFilter";

const LaptopPage = () => {
  return (
    <div className="products__container">
      <div className="product__filter">
        <LaptopFilter></LaptopFilter>
      </div>

      <div className="product__container">
        <Laptop></Laptop>
      </div>
    </div>
  );
};

export default LaptopPage;
