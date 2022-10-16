import React from "react";
import { useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";

const BasketProducts = () => {
  const Laptops = useSelector((state) => state.commerce.LaptopData);

  const truncate = (str) => {
    return str.length > 10 ? `${str.substring(0, 29)}...` : str;
  };

  return (
    <>
      {Laptops.map((x) => (
        <div className="basket__product__container">
          <img src={require(`../assets/LaptopImage/${x.image}`)} alt="" />

          <div className="basket__product__left">
            <p className="basket__product__info">
              <strong>{x.brand}</strong> {x.name} {truncate(x.description)}
            </p>

            <div className="basket__product__payment">
              <div className="amount__count">
                <button>+</button>
                <span>1</span>
                <button>-</button>
              </div>

              <div className="basket__product__price">
                <span>${x.price}</span>
              </div>
            </div>
          </div>

          <button className="basket__product__remove">
            <DeleteIcon></DeleteIcon>
          </button>
        </div>
      ))}
    </>
  );
};

export default BasketProducts;
