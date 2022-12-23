import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useDispatch, useSelector } from "react-redux";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import { logout } from "../firebase";
import { logout as handleLogout } from "../redux/authSlice";

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { handleMenu, allProducts } from "../redux/commerceSlice";

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
  const navigate = useNavigate();
  const myBasket = useSelector((state) => state.commerce.myBasket);
  const allBasket = useSelector((state) => state.commerce.allProducts);
  const { user } = useSelector((state) => state.auth);
  const [filterData, setFilterData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  useEffect(() => {
    dispatch(allProducts());
  }, [dispatch]);

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

  const getBasketQuantity = () => {
    let total = 0;
    myBasket.map((x) => (total += x.quantity));
    return total;
  };

  const handleFilter = (e) => {
    const value = e.target.value;
    setWordEntered(value);
    const newFilteredData = allBasket.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    });
    setFilterData(newFilteredData);

    if (value === "") {
      setFilterData([]);
    }
  };

  const clearInput = () => {
    setFilterData([]);
    setWordEntered("");
  };

  const closeSearch = (e) => {
    const text = e.target.innerHTML;
    setFilterData([]);
    setWordEntered(text);
  };

  const openFilter = () => {
    setFilterData(allBasket);
  };

  const handlerLogout = async () => {
    await logout();
    dispatch(handleLogout());
    navigate("/");
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
          <div className="search">
            <input
              onClick={() => openFilter()}
              onChange={(e) => handleFilter(e)}
              value={wordEntered}
              className="search"
              placeholder="Search"
              type="text"
            />

            <div className="searchIcon">
              {filterData.length === 0 ? (
                <SearchIcon className="search__icon"></SearchIcon>
              ) : (
                <CloseIcon className="close__icon" onClick={clearInput} />
              )}
            </div>
          </div>

          {filterData.length > 0 && (
            <div className="data__result">
              {filterData.map((x) => {
                return (
                  <Link
                    to={`${x.category}/${x.id}`}
                    className="data__item"
                    onClick={(e) => closeSearch(e)}
                  >
                    <p>{x.name}</p>
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        <div className="header__right">
          <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <Link className="login" to="/login">
              <PersonOutlinedIcon className="login__icon"></PersonOutlinedIcon>
              {user ? <span> {user.user.email} </span> : <span>Login </span>}
            </Link>

            {isHovering && (
              <div
                onMouseEnter={handleMouseEnter}
                style={user ? { gap: 0, left: "10px" } : {}}
                className="modal"
              >
                <div className="modal__login">
                  {user ? (
                    <button onClick={handlerLogout} className="login__btn">
                      Logout
                    </button>
                  ) : (
                    <>
                      <Link
                        onClick={() => setIsHovering(false)}
                        to="/login"
                        className="login__btn"
                      >
                        Login
                      </Link>
                    </>
                  )}
                </div>
                <div className="modal__register">
                  {user ? (
                    <></>
                  ) : (
                    <>
                      <Link
                        onClick={() => setIsHovering(false)}
                        to="/register"
                        className="register__btn"
                      >
                        Register
                      </Link>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          <Link className="favorites" to="/favorites">
            <FavoriteBorderOutlinedIcon className="favorites__icon"></FavoriteBorderOutlinedIcon>
            <span>Favorites</span>
          </Link>

          <Link className="count__con" to="/myBasket">
            <span className="count__text">My Basket</span>
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={getBasketQuantity()} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Link>
        </div>
      </div>

      <div className="header__middle2__con">
        <div className="header__middle2">
          <div className="search">
            <input
              onChange={(e) => handleFilter(e)}
              value={wordEntered}
              className="search"
              placeholder="Search"
              type="text"
            />

            <div className="searchIcon">
              {filterData.length === 0 ? (
                <SearchIcon className="search__icon"></SearchIcon>
              ) : (
                <CloseIcon className="close__icon" onClick={clearInput} />
              )}
            </div>
          </div>

          {filterData.length > 0 && (
            <div className="data__result">
              {filterData.map((x) => {
                return (
                  <Link
                    to={`${x.category}/${x.id}`}
                    className="data__item"
                    onClick={(e) => closeSearch(e)}
                  >
                    <p>{x.name}</p>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
