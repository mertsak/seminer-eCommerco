import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch } from "react-redux";

import { handleMenu } from "../redux/commerceSlice";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__left">
          <div className="menu__con">
            <div onClick={() => dispatch(handleMenu())} className="menu__inner">
              <MenuOutlinedIcon className="menu__icon"></MenuOutlinedIcon>
              <p>Menu</p>
            </div>
          </div>

          <Link to="/">MertShop</Link>
        </div>

        <div className="header__middle">
          <input className="search" placeholder="Search" type="text" />
          <SearchIcon className="search__icon"></SearchIcon>
        </div>

        <div className="header__right">
          <a className="login" href="#/">
            <PersonOutlinedIcon className="login__icon"></PersonOutlinedIcon>{" "}
            <span>Login</span>
          </a>
          <a className="favorites" href="#/">
            <FavoriteBorderOutlinedIcon className="favorites__icon"></FavoriteBorderOutlinedIcon>
            <span>Favorites</span>
          </a>

          <a className="count__con" href="#/">
            <span>My Basket</span>
            <ShoppingCartOutlinedIcon className="shop__icon"></ShoppingCartOutlinedIcon>
          </a>
        </div>
      </div>

      <div className="header__middle2__con">
        <div className="header__middle2">
          <input className="search" placeholder="Search" type="text" />
          <SearchIcon className="search__icon"></SearchIcon>
        </div>
      </div>
    </header>
  );
};

export default Header;
