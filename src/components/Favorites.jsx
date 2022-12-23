import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CurrencyFormat from "react-currency-format";
import { orange } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Rating from "@mui/material/Rating";
import { addFavorites } from "../redux/commerceSlice.js";

const Favorites = () => {
  const dispatch = useDispatch();
  const Favorites = useSelector((state) => state.commerce.myFavorites);
  const { user } = useSelector((state) => state.auth);

  const truncate = (str) => {
    return str.length > 10 ? `${str.substring(0, 40)}...` : str;
  };

  return (
    <>
      {Favorites.length === 0 ? (
        <div className="mybasket__empty">
          <p>
            {user ? user.user.email : "You have"} <b>no items</b> in your
            favorites . to add one or more item , click{" "}
            <b>"Add to favorites"</b> next to the item.
          </p>
        </div>
      ) : (
        <div className="favorites__inner__container">
          {Favorites.map((x) => (
            <div className="favorites__top__container">
              <Link
                className="favorite__inner__container"
                to={`${x.category}/${x.id}`}
              >
                <img
                  className="favorites__image"
                  src={require(`../assets/${x.imageFile}/${x.image}`)}
                  alt=""
                />

                <div className="favorites__info">
                  <p className="favorites__desc">
                    <strong>{x.brand}</strong> {x.name}
                    {truncate(x.description)}
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
      )}
    </>
  );
};

export default Favorites;
