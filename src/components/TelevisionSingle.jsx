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

const TelevisionSingle = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const SingleTelevision = useSelector(
    (state) => state.commerce.TelevisionData[params.uuid - 1]
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
      {SingleTelevision && (
        <div className="product__single__container">
          <div className="product__single__image">
            <img
              className="product__image"
              src={require(`../assets/${SingleTelevision.imageFile}/${SingleTelevision.image}`)}
              alt=""
            />
          </div>

          <div className="product__single__info">
            <p className="product__single_desc">
              <strong>{SingleTelevision.brand}</strong> {SingleTelevision.name}
              {SingleTelevision.description}
            </p>

            <div className="single__rating">
              <Rating
                name="read-only"
                value={SingleTelevision.rating}
                readOnly
              />
              <span className="reviews">
                {SingleTelevision.numReviews}{" "}
                <RemoveRedEyeIcon></RemoveRedEyeIcon>
              </span>
            </div>

            <div className="single__price">
              <p>Basket Price</p>
              <CurrencyFormat
                value={SingleTelevision.price}
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
                      SingleTelevision.id,
                      SingleTelevision.name,
                      SingleTelevision.image,
                      SingleTelevision.imageFile,
                      SingleTelevision.description,
                      SingleTelevision.brand,
                      SingleTelevision.price
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
                  checked={SingleTelevision.chechFavorites ? true : false}
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
                  Screen Size: <span>{SingleTelevision.screenSize} </span>
                </li>
                <li>
                  Smart TV:
                  <span>{SingleTelevision.smartTv} </span>
                </li>
                <li>
                  Imaging Technology:{" "}
                  <span>{SingleTelevision.ımagingTechnology} </span>
                </li>
                <li>
                  Warranty Type: <span>{SingleTelevision.warrantyType} </span>
                </li>
                <li>
                  Built-in Satellite Receiver:{" "}
                  <span>{SingleTelevision.builtInSatelliteReceiver} </span>
                </li>
                <li>
                  Image Quality: <span>{SingleTelevision.ımageQuality} </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TelevisionSingle;
