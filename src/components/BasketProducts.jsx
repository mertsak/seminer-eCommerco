import React from "react";
import { useSelector, useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  incrementQuantity,
  decrementQuantity,
  removeBasket,
} from "../redux/commerceSlice.js";

const BasketProducts = () => {
  const dispatch = useDispatch();

  const myBasket = useSelector((state) => state.commerce.myBasket);

  const truncate = (str) => {
    return str.length > 10 ? `${str.substring(0, 29)}...` : str;
  };

  return (
    <>
      {myBasket.length === 0 ? (
        <div className="mybasket__empty">
          <p>
            You have <b>no items</b> in your basket . to buy one or more item ,
            click <b>"Add to basket"</b> next to the item.
          </p>
        </div>
      ) : (
        <>
          {myBasket.map((x) => (
            <div className="basket__product__container">
              <img
                src={require(`../assets/${x.imageFile}/${x.image}`)}
                alt=""
              />

              <div className="basket__product__left">
                <p className="basket__product__info">
                  <strong>{x.brand}</strong> {x.name} {truncate(x.description)}
                </p>

                <div className="basket__product__payment">
                  <div className="amount__count">
                    <button onClick={() => dispatch(incrementQuantity(x.id))}>
                      +
                    </button>
                    <span>{x.quantity}</span>
                    <button onClick={() => dispatch(decrementQuantity(x.id))}>
                      -
                    </button>
                  </div>

                  <div className="basket__product__price">
                    <span>${x.price}</span>
                  </div>
                </div>
              </div>

              <button className="basket__product__remove">
                <DeleteIcon
                  onClick={() => dispatch(removeBasket(x.id))}
                ></DeleteIcon>
              </button>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default BasketProducts;
