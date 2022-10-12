import React from "react";

import Phone from "../components/Phone";
import PhoneFilter from "../components/PhoneFilter";

const PhonePage = () => {
  return (
    <div className="products__container">
      <div className="product__filter">
        <PhoneFilter></PhoneFilter>
      </div>

      <div className="product__container">
        <Phone></Phone>
      </div>
    </div>
  );
};

export default PhonePage;
