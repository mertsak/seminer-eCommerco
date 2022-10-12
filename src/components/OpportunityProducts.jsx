import React from "react";
import { useSelector } from "react-redux";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import CurrencyFormat from "react-currency-format";
import { orange } from "@mui/material/colors";

import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const Highlights = () => {
  const Laptops = useSelector((state) => state.commerce.LaptopData);

  const truncate = (str) => {
    return str.length > 10 ? `${str.substring(0, 25)}...` : str;
  };
  return (
    <div className="swiper__con">
      <Swiper
        slidesPerView={4.1}
        spaceBetween={30}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2.5,
          },
          1200: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 4,
          },
          1700: {
            slidesPerView: 5,
          },
        }}
      >
        <div className="swiper__header">
          <h2>Opportunity Products</h2>
          <a href="#/">Tüm Ürünler</a>
        </div>

        {Laptops.map((x) => (
          <SwiperSlide>
            <div className="product">
              <img
                className="product__image"
                src={require(`../assets/LaptopImage/${x.image}`)}
                alt=""
              />

              <div className="product__info">
                <p className="product__desc">
                  <strong>{x.brand}</strong> {x.name} {truncate(x.description)}
                </p>

                <div className="product__price">
                  <CurrencyFormat
                    value={x.price}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                </div>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Highlights;
