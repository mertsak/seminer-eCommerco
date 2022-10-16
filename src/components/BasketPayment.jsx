import React from "react";

const BasketPayment = () => {
  return (
    <div className="payment__container">
      <button className="payment__btn">Confirm Cart</button>

      <div className="payment__info">
        <h2>Order Summary</h2>
        <hr className="line" />
        <div className="total__price">
          <p>Basket Amount:</p>
          <span className="price__count">$100</span>
        </div>
      </div>
    </div>
  );
};

export default BasketPayment;
