import React from "react";

import Television from "../components/Television";
import TelevisionFilter from "../components/TelevisionFilter";

const TelevisionPage = () => {
  return (
    <div className="products__container">
      <div className="product__filter">
        <TelevisionFilter></TelevisionFilter>
      </div>

      <div className="product__container">
        <Television></Television>
      </div>
    </div>
  );
};

export default TelevisionPage;
