/* eslint-disable no-implied-eval */
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "react-currency-format";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { orange } from "@mui/material/colors";

import { addBasket } from "../redux/commerceSlice.js";
import { addFavorites } from "../redux/commerceSlice.js";

import { useSelector, useDispatch } from "react-redux";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const LaptopSingle = () => {
  const [addedItem, setAddedItem] = useState(false);

  const dispatch = useDispatch();
  const params = useParams();
  const SingleLaptop = useSelector(
    (state) => state.commerce.LaptopData[params.uuid - 1]
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
      {SingleLaptop && (
        <div className="product__single__container">
          <div className="product__single__image">
            <img
              className="product__image"
              src={require(`../assets/LaptopImage/${SingleLaptop.image}`)}
              alt=""
            />
          </div>

          <div className="product__single__info">
            <p className="product__single_desc">
              <strong>{SingleLaptop.brand}</strong> {SingleLaptop.name}
              {SingleLaptop.description}
            </p>

            <div className="single__rating">
              <Rating name="read-only" value={SingleLaptop.rating} readOnly />
              <span className="reviews">
                {SingleLaptop.numReviews} <RemoveRedEyeIcon></RemoveRedEyeIcon>
              </span>
            </div>

            <div className="single__price">
              <p>Basket Price</p>
              <CurrencyFormat
                value={SingleLaptop.price}
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
                      SingleLaptop.id,
                      SingleLaptop.name,
                      SingleLaptop.image,
                      SingleLaptop.imageFile,
                      SingleLaptop.description,
                      SingleLaptop.brand,
                      SingleLaptop.category,
                      SingleLaptop.price,
                      SingleLaptop.productUnicId
                    )
                  }
                  className={addedItem ? "added" : "add__btn"}
                >
                  {addedItem ? "Added" : "Add to Basket"}
                </button>
              </div>

              <div className="heart">
                <Checkbox
                  onClick={() => dispatch(addFavorites(SingleLaptop.productUnicId))}
                  checked={SingleLaptop.chechFavorites ? true : false}
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
                  Processor Type: <span>{SingleLaptop.processorType} </span>
                </li>
                <li>
                  Operating system: <span>{SingleLaptop.processorSystem} </span>
                </li>
                <li>
                  RAM Capacity: <span>{SingleLaptop.ram} </span>
                </li>
                <li>
                  SSD Capacity: <span>{SingleLaptop.ssdCapacity} </span>
                </li>
                <li>
                  Display Card: <span>{SingleLaptop.displayCard} </span>
                </li>
                <li>
                  Warranty Type: <span>{SingleLaptop.warrantyType} </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LaptopSingle;
