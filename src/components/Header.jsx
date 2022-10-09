import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useDispatch } from "react-redux";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { handleMenu } from "../redux/commerceSlice";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    backgroundColor: "#f27a1a",
  },
}));

const Header = () => {
  const dispatch = useDispatch();

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

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
          <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <Link className="login" to="/login">
              <PersonOutlinedIcon className="login__icon"></PersonOutlinedIcon>
              <span>Login</span>
            </Link>

            {isHovering && (
              <div onMouseEnter={handleMouseEnter} className="modal">
                <div className="modal__login">
                  <Link to="/login" className="login__btn">
                    Login
                  </Link>
                </div>
                <div className="modal__register">
                  <Link to="/register" className="register__btn">
                    Register
                  </Link>
                </div>
              </div>
            )}
          </div>

          <a className="favorites" href="#/">
            <FavoriteBorderOutlinedIcon className="favorites__icon"></FavoriteBorderOutlinedIcon>
            <span>Favorites</span>
          </a>

          <a className="count__con" href="#/">
            <span className="count__text">My Basket</span>
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={1} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
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
