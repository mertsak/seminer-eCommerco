import React from "react";

import BasketPrice from "../components/BasketPayment";
import BasketProducts from "../components/BasketProducts";

const MyBasketPage = () => {
  return (
    <div className="basket__page__container">
      <div className="basket__products">
        <BasketProducts></BasketProducts>
      </div>

      <div className="basket__price">
        <BasketPrice></BasketPrice>
      </div>
    </div>
  );
};

export default MyBasketPage;
