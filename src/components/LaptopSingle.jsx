import React from "react";
import { useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "react-currency-format";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { orange } from "@mui/material/colors";

import { useSelector } from "react-redux";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const LaptopSingle = () => {
  const params = useParams();
  const SingleLaptop = useSelector(
    (state) => state.commerce.LaptopData[params.uuid - 1]
  );

  return (
    <div className="laptop__single">
      {SingleLaptop && (
        <div className="laptop__single__container">
          <div className="laptop__single__image">
            <img
              className="product__image"
              src={require(`../assets/LaptopImage/${SingleLaptop.image}`)}
              alt=""
            />
          </div>

          <div className="laptop__single__info">
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
                <button className="add__btn">Add Basket</button>
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
                  Processor Type: <span>{SingleLaptop.processorType} </span>
                </li>
                <li>
                  Processor Type: <span>{SingleLaptop.processorSystem} </span>
                </li>
                <li>
                  Processor Type: <span>{SingleLaptop.ram} </span>
                </li>
                <li>
                  Processor Type: <span>{SingleLaptop.ssdCapacity} </span>
                </li>
                <li>
                  Processor Type: <span>{SingleLaptop.displayCard} </span>
                </li>
                <li>
                  Processor Type: <span>{SingleLaptop.warrantyType} </span>
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
