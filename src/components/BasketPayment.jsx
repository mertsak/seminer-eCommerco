import React from "react";
import { useSelector } from "react-redux";

const BasketPayment = () => {
  const myBasket = useSelector((state) => state.commerce.myBasket);

  const getBasketTotal = () => {
    let total = 0;
    myBasket.map((x) => (total += Number(x.price) * x.quantity));
    return total;
  };

  return (
    <div className="payment__container">
      <button className="payment__btn">Confirm Cart</button>

      <div className="payment__info">
        <h2>Order Summary</h2>
        <hr className="line" />
        <div className="total__price">
          <p>Basket Amount:</p>
          <span className="price__count">{getBasketTotal()}</span>
        </div>
      </div>
    </div>
  );
};

export default BasketPayment;
