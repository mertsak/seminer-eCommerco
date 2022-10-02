import React from "react";
import { useSelector } from "react-redux";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CurrencyFormat from "react-currency-format";
import { orange } from "@mui/material/colors";

import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

import Rating from "@mui/material/Rating";
const Laptop = () => {
  const Laptops = useSelector((state) => state.commerce.LaptopData);

  // test için yapıldı dosyayı düzenle !!!

  const truncate = (str) => {
    return str.length > 10 ? `${str.substring(0, 40)}...` : str;
  };

  return (
    <>
      <div className="products__inner__container">
        {Laptops.map((x) => (
          <div className="product__inner__container">
            <img
              className="product__image"
              src={require(`../assets/LaptopImage/${x.image}`)}
              alt=""
            />

            <div className="product__info">
              <p className="product__desc">
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
              <Checkbox
                sx={{
                  "&.Mui-checked": {
                    color: orange[600],
                  },
                }}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Laptop;
