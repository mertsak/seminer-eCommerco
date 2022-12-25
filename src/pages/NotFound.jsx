import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const NotFound = () => {
  return (
    <div className="not__found">
      <h1>Oops! You seem to be lost.</h1>

      <div className="not__found__text">
        <h3>Here are some helpful links</h3>
        <p>
          <ArrowForwardOutlinedIcon
            fontSize="medium"
            className="arrow"
          ></ArrowForwardOutlinedIcon>
          Home Page:<Link to="/">Home</Link>
        </p>
        <p>
          <ArrowForwardOutlinedIcon
            fontSize="medium"
            className="arrow"
          ></ArrowForwardOutlinedIcon>
          Register Page:<Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
