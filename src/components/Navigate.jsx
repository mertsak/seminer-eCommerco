import React from "react";
import { NavLink, Link } from "react-router-dom";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useSelector, useDispatch } from "react-redux";
import { handleMenu } from "../redux/commerceSlice";

const Navigate = () => {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.commerce.menu);

  return (
    <nav className={`${menu ? "active" : null} `}>
      <div className="nav__header">
        <Link onClick={() => dispatch(handleMenu())} to="/">
          MertShop
        </Link>
        <CloseOutlinedIcon
          onClick={() => dispatch(handleMenu())}
        ></CloseOutlinedIcon>
      </div>

      <ul className="nav-list">
        <li className="nav-item">
          <NavLink
            onClick={() => dispatch(handleMenu())}
            className="nav-link"
            to="/laptop"
          >
            Laptop
          </NavLink>
          <ArrowForwardIosOutlinedIcon className="arrow__icon"></ArrowForwardIosOutlinedIcon>
        </li>

        <li className="nav-item">
          <NavLink
            onClick={() => dispatch(handleMenu())}
            className="nav-link"
            to="/phone"
          >
            Phone
          </NavLink>
          <ArrowForwardIosOutlinedIcon className="arrow__icon"></ArrowForwardIosOutlinedIcon>
        </li>

        <li className="nav-item">
          <NavLink
            onClick={() => dispatch(handleMenu())}
            className="nav-link"
            to="/headphone"
          >
            Headphone
          </NavLink>
          <ArrowForwardIosOutlinedIcon className="arrow__icon"></ArrowForwardIosOutlinedIcon>
        </li>

        <li className="nav-item">
          <NavLink
            onClick={() => dispatch(handleMenu())}
            className="nav-link"
            to="/television"
          >
            Television
          </NavLink>
          <ArrowForwardIosOutlinedIcon className="arrow__icon"></ArrowForwardIosOutlinedIcon>
        </li>

        <li className="nav-item">
          <NavLink
            onClick={() => dispatch(handleMenu())}
            className="nav-link"
            to="/monitor"
          >
            monitor
          </NavLink>
          <ArrowForwardIosOutlinedIcon className="arrow__icon"></ArrowForwardIosOutlinedIcon>
        </li>
      </ul>

      <hr className="line"></hr>
    </nav>
  );
};

export default Navigate;
