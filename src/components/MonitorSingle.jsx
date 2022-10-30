import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "react-currency-format";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { orange } from "@mui/material/colors";
import { useSelector, useDispatch } from "react-redux";
import { addBasket } from "../redux/commerceSlice.js";
import { addFavorites } from "../redux/commerceSlice.js";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const MonitorSingle = () => {
  const [addedItem, setAddedItem] = useState(false);
  const dispatch = useDispatch();

  const params = useParams();
  const SingleMonitor = useSelector(
    (state) => state.commerce.MonitorData[params.uuid - 1]
  );

  const addToBasket = (
    id,
    name,
    image,
    imageFile,
    description,
    brand,
    category,
    price,
    productUnicId
  ) => {
    dispatch(
      addBasket({
        id: id,
        name: name,
        image: image,
        imageFile: imageFile,
        description: description,
        brand: brand,
        category: category,
        price: price,
        productUnicId: productUnicId,
      })
    );

    setAddedItem(true);

    setTimeout(() => {
      setAddedItem(false);
    }, 1500);
  };

  return (
    <div className="product__single">
      {SingleMonitor && (
        <div className="product__single__container">
          <div className="product__single__image">
            <img
              className="product__image"
              src={require(`../assets/MonitorImage/${SingleMonitor.image}`)}
              alt=""
            />
          </div>

          <div className="product__single__info">
            <p className="product__single_desc">
              <strong>{SingleMonitor.brand}</strong> {SingleMonitor.name}
              {SingleMonitor.description}
            </p>

            <div className="single__rating">
              <Rating name="read-only" value={SingleMonitor.rating} readOnly />
              <span className="reviews">
                {SingleMonitor.numReviews} <RemoveRedEyeIcon></RemoveRedEyeIcon>
              </span>
            </div>

            <div className="single__price">
              <p>Basket Price</p>
              <CurrencyFormat
                value={SingleMonitor.price}
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
                      SingleMonitor.id,
                      SingleMonitor.name,
                      SingleMonitor.image,
                      SingleMonitor.imageFile,
                      SingleMonitor.description,
                      SingleMonitor.brand,
                      SingleMonitor.category,
                      SingleMonitor.price,
                      SingleMonitor.productUnicId
                    )
                  }
                  className={addedItem ? "added" : "add__btn"}
                >
                  {addedItem ? "Added" : "Add to Basket"}
                </button>
              </div>

              <div
                className="heart"
                onClick={() =>
                  dispatch(addFavorites(SingleMonitor.productUnicId))
                }
              >
                <Checkbox
                  sx={{
                    "&.Mui-checked": {
                      color: orange[600],
                    },
                  }}
                  checked={SingleMonitor.chechFavorites ? true : false}
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
                  Screen Size: <span>{SingleMonitor.screenSize} </span>
                </li>
                <li>
                  Resolution:
                  <span>{SingleMonitor.resolution} </span>
                </li>
                <li>
                  Reaction Time: <span>{SingleMonitor.reactionTime} </span>
                </li>
                <li>
                  Warranty Type: <span>{SingleMonitor.warrantyType} </span>
                </li>
                <li>
                  Panel Type: <span>{SingleMonitor.panelType} </span>
                </li>
                <li>
                  Imaging technologY:{" "}
                  <span>{SingleMonitor.Imagingtechnology} </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MonitorSingle;
