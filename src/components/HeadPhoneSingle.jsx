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

const HeadPhoneSingle = () => {
    const params = useParams();
    const SingleHeadPhone = useSelector(
        (state) => state.commerce.HeadPhoneData[params.uuid - 1]
    );
    return (
        <div className="laptop__single">
            {SingleHeadPhone && (
                <div className="laptop__single__container">
                    <div className="laptop__single__image">
                        <img
                            className="product__image"
                            src={require(`../assets/HeadPhoneImage/${SingleHeadPhone.image}`)}
                            alt=""
                        />
                    </div>

                    <div className="laptop__single__info">
                        <p className="product__single_desc">
                            <strong>{SingleHeadPhone.brand}</strong> {SingleHeadPhone.name}
                            {SingleHeadPhone.description}
                        </p>

                        <div className="single__rating">
                            <Rating name="read-only" value={SingleHeadPhone.rating} readOnly />
                            <span className="reviews">
                                {SingleHeadPhone.numReviews} <RemoveRedEyeIcon></RemoveRedEyeIcon>
                            </span>
                        </div>

                        <div className="single__price">
                            <p>Basket Price</p>
                            <CurrencyFormat
                                value={SingleHeadPhone.price}
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
                                    Connection: <span>{SingleHeadPhone.connection} </span>
                                </li>
                                <li>
                                    Usage Type: <span>{SingleHeadPhone.usageType} </span>
                                </li>
                                <li>
                                    Active Noise Cancellation: <span>{SingleHeadPhone.activeNoiseCancellation} </span>
                                </li>
                                <li>
                                    HeadPhone Model: <span>{SingleHeadPhone.headphoneModel} </span>
                                </li>
                                <li>
                                    Color: <span>{SingleHeadPhone.color} </span>
                                </li>
                                <li>
                                    Microphone: <span>{SingleHeadPhone.microphone} </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default HeadPhoneSingle