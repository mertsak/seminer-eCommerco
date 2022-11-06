import React from "react";
import { useSelector, useDispatch } from "react-redux";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CurrencyFormat from "react-currency-format";
import { orange } from "@mui/material/colors";
import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Rating from "@mui/material/Rating";
import { addFavorites } from "../redux/commerceSlice.js";

const Television = () => {
  const dispatch = useDispatch();
  const Televisions = useSelector((state) => state.commerce.TelevisionData);

  const truncate = (str) => {
    return str.length > 10 ? `${str.substring(0, 40)}...` : str;
  };

  return (
    <>
      <div className="products__inner__container">
        {Televisions.map((x) => (
          <div className="product__top__container">
            <Link className="product__inner__container" to={`${x.id}`}>
              <img
                className="product__image"
                src={require(`../assets/TelevisionImage/${x.image}`)}
                alt=""
              />

              <div className="product__info">
                <p className="product__desc">
                  <strong>{x.name} </strong> {truncate(x.description)}{" "}
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
            </Link>
            <div className="heart">
              <Checkbox
                onClick={() => dispatch(addFavorites(x.productUnicId))}
                sx={{
                  "&.Mui-checked": {
                    color: orange[600],
                  },
                }}
                checked={x.chechFavorites ? true : false}
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

export default Television;
