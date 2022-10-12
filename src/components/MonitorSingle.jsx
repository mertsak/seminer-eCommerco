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

const MonitorSingle = () => {

    const params = useParams();
    const SingleMonitor = useSelector(
        (state) => state.commerce.MonitorData[params.uuid - 1]
    );
    return (
        <div className="laptop__single">
            {SingleMonitor && (
                <div className="laptop__single__container">
                    <div className="laptop__single__image">
                        <img
                            className="product__image"
                            src={require(`../assets/MonitorImage/${SingleMonitor.image}`)}
                            alt=""
                        />
                    </div>

                    <div className="laptop__single__info">
                        <p className="product__single_desc">
                            <strong>{SingleMonitor.brand}</strong> {SingleMonitor.name}
                            {SingleMonitor.description}
                        </p>

                        <div className="single__rating">
                            <Rating
                                name="read-only"
                                value={SingleMonitor.rating}
                                readOnly
                            />
                            <span className="reviews">
                                {SingleMonitor.numReviews}{" "}
                                <RemoveRedEyeIcon></RemoveRedEyeIcon>
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
                                    Imaging technologY: <span>{SingleMonitor.Imagingtechnology} </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MonitorSingle