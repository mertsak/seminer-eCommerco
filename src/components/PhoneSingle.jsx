import React from "react";
import { useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "react-currency-format";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { orange } from "@mui/material/colors";
import { addBasket } from "../redux/commerceSlice.js";
import { useSelector, useDispatch } from "react-redux";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const PhoneSingle = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const SinglePhone = useSelector(
    (state) => state.commerce.PhoneData[params.uuid - 1]
  );

  const addToBasket = (
    id,
    name,
    image,
    imageFile,
    description,
    brand,
    price
  ) => {
    dispatch(
      addBasket({
        id: id,
        name: name,
        image: image,
        imageFile: imageFile,
        description: description,
        brand: brand,
        price: price,
      })
    );
  };

  return (
    <div className="product__single">
      {SinglePhone && (
        <div className="product__single__container">
          <div className="product__single__image">
            <img
              className="product__image"
              src={require(`../assets/PhoneImage/${SinglePhone.image}`)}
              alt=""
            />
          </div>

          <div className="product__single__info">
            <p className="product__single_desc">
              <strong>{SinglePhone.brand}</strong> {SinglePhone.name}
              {SinglePhone.description}
            </p>

            <div className="single__rating">
              <Rating name="read-only" value={SinglePhone.rating} readOnly />
              <span className="reviews">
                {SinglePhone.numReviews} <RemoveRedEyeIcon></RemoveRedEyeIcon>
              </span>
            </div>

            <div className="single__price">
              <p>Basket Price</p>
              <CurrencyFormat
                value={SinglePhone.price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </div>

            <div className="single__basket">
              <div className="basket">
                <button
                  onClick={() =>
                    addToBasket(
                      SinglePhone.id,
                      SinglePhone.name,
                      SinglePhone.image,
                      SinglePhone.imageFile,
                      SinglePhone.description,
                      SinglePhone.brand,
                      SinglePhone.price
                    )
                  }
                  className="add__btn"
                >
                  Add Basket
                </button>
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

            <hr className="line" />

            <div className="single__inner__desc">
              <h4>Featured Information</h4>

              <ul>
                <li>
                  Warranty Type: <span>{SinglePhone.warrantyType} </span>
                </li>
                <li>
                  Ram Capacity:
                  <span>{SinglePhone.ram} </span>
                </li>
                <li>
                  Battery Capacity Range:{" "}
                  <span>{SinglePhone.batteryPower} </span>
                </li>
                <li>
                  Internal Memory: <span>{SinglePhone.internalMemory} </span>
                </li>
                <li>
                  Connection Type: <span>{SinglePhone.Links} </span>
                </li>
                <li>
                  Screen Size: <span>{SinglePhone.screenSize} </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhoneSingle;
