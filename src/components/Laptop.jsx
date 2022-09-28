import React from "react";
import { useSelector } from "react-redux";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CurrencyFormat from "react-currency-format";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import Rating from "@mui/material/Rating";
const Laptop = () => {
  const Laptops = useSelector((state) => state.commerce.LaptopData);

  // test için yapıldı dosyayı düzenle !!!

  const truncate = (str) => {
    return str.length > 10 ? `${str.substring(0, 40)}...` : str;
  };

  return (
    <>
      <div className="laptops__container">
        {Laptops.map((x) => (
          <>
            <div className="laptop__container">
              <img
                className="laptop__image"
                src={require(`../assets/LaptopImage/${x.image}`)}
                alt=""
              />

              <div className="laptop__info">
                <p className="laptop__desc">
                  <strong>{x.brand}</strong> {x.name} {truncate(x.description)}
                </p>

                <div className="rating">
                  <Rating name="read-only" value={x.rating} readOnly />
                  <span className="reviews">
                    {x.numReviews} <RemoveRedEyeIcon></RemoveRedEyeIcon>
                  </span>
                </div>
                <div className="price">
                  <p>Basket Price</p>
                  <CurrencyFormat
                    value={x.price}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                </div>
              </div>

              <div className="heart">
                <FavoriteBorderOutlinedIcon className="heart__icon"></FavoriteBorderOutlinedIcon>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Laptop;
