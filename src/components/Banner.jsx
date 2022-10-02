import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Banner = () => {
  return (
    <>
      <div className="banner__containers">
        <div className="banner__container">
          <img
            src={require("../assets/BannerImage/pexels-hasan-albari-1229861.jpg")}
            alt=""
          />
          <div className="banner__text">
            <p>Laptops</p>
            <p className="text__shop">
              <span>
                Start Shopping
                <ArrowForwardIosIcon className="arrow"> </ArrowForwardIosIcon>
              </span>
            </p>
          </div>
        </div>
        <div className="banner__container">
          <img
            src={require("../assets/BannerImage/pexels-mateusz-dach-450035.jpg")}
            alt=""
          />
          <div className="banner__text">
            <p>Monitor</p>
            <p className="text__shop">
              <span>
                Start Shopping
                <ArrowForwardIosIcon className="arrow"> </ArrowForwardIosIcon>
              </span>
            </p>
          </div>
        </div>
        <div className="banner__container">
          <img
            src={require("../assets/BannerImage/pexels-garrett-morrow-1649771.jpg")}
            alt=""
          />
          <div className="banner__text">
            <p>HeadPhone</p>
            <p className="text__shop">
              <span>
                Start Shopping
                <ArrowForwardIosIcon className="arrow"> </ArrowForwardIosIcon>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
