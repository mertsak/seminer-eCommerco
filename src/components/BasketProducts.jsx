import React from "react";
import { Link } from "react-router-dom";

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
    return str.length > 10 ? `${str.substring(0, 40)}...` : str;
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
            <div key={x.id} className="basket__product__container">
              <img
                src={require(`../assets/${x.imageFile}/${x.image}`)}
                alt=""
              />

              <div className="basket__product__left">
                <Link
                  to={`${x.category}/${x.id}`}
                  className="basket__product__info"
                >
                  <strong>{x.brand}</strong> {x.name} {truncate(x.description)}
                </Link>

                <div className="basket__product__payment">
                  <div className="amount__count">
                    <button
                      onClick={() =>
                        dispatch(incrementQuantity(x.productUnicId))
                      }
                    >
                      +
                    </button>
                    <span>{x.quantity}</span>
                    <button
                      onClick={() =>
                        dispatch(decrementQuantity(x.productUnicId))
                      }
                    >
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
                  onClick={() => dispatch(removeBasket(x.productUnicId))}
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
