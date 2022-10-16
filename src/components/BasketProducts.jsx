import React from "react";
import { useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";

const BasketProducts = () => {
  const Laptops = useSelector((state) => state.commerce.LaptopData);

  return (
    <>
      {Laptops.map((x) => (
        <div className="basket__product__container">
          <img src={require(`../assets/LaptopImage/${x.image}`)} alt="" />

          <p className="basket__product__info">
            <strong>{x.brand}</strong> {x.name}
            {x.description}
          </p>

          <div className="amount__count">
            <button>+</button>
            <span>1</span>
            <button>-</button>
          </div>

          <div className="basket__product__price">
            <span>${x.price}</span>
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
