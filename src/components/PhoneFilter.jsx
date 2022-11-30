import React, { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { orange } from "@mui/material/colors";
import { useDispatch } from "react-redux";

import {
  phoneHandleFilter,
  phoneHandleSorting,
} from "../redux/commerceSlice.js";

import Sort from "./Sort.jsx";

const PhoneFilter = () => {
  const dispatch = useDispatch();
  const [drop, setDrop] = useState(null);
  const [sortName, setSortName] = React.useState("def");

  const [productBrand, setProductBrand] = useState({
    brands: [],
  });

  const handleChangeSort = (event) => {
    setSortName(event.target.value);
  };

  useEffect(() => {
    dispatch(phoneHandleSorting(sortName));
  }, [sortName, dispatch]);

  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { brands } = productBrand;

    // Case 1 : The user checks the box
    if (checked) {
      setProductBrand({
        brands: [...brands, value],
        sortName: sortName,
      });
    }

    // Case 2  : The user unchecks the box
    else {
      setProductBrand({
        brands: brands.filter((e) => e !== value),
      });
    }
  };

  dispatch(phoneHandleFilter(productBrand));

  const handleDrop = () => {
    setDrop(!drop);
  };
  return (
    <div className="filter__container">
      <div className="filter__brand">
        <div onClick={() => handleDrop()} className="filter__header">
          <h3>Brand</h3>
          <KeyboardArrowDownIcon
            className={`arrow__icon ${drop ? "active" : "null"}`}
          ></KeyboardArrowDownIcon>
        </div>

        <div className={`filter__inner__con ${drop ? "active" : "null"}`}>
          <div className="filter__inner">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(e) => handleChange(e)}
                    size="small"
                    sx={{
                      "&.Mui-checked": {
                        color: orange[600],
                      },
                    }}
                  />
                }
                label="Apple"
                value="Apple"
              />
            </FormGroup>
          </div>

          <div className="filter__inner">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(e) => handleChange(e)}
                    sx={{
                      "&.Mui-checked": {
                        color: orange[600],
                      },
                    }}
                    size="small"
                  />
                }
                label="Xiaomi"
                value="Xiaomi"
              />
            </FormGroup>
          </div>

          <div className="filter__inner">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(e) => handleChange(e)}
                    size="small"
                    sx={{
                      "&.Mui-checked": {
                        color: orange[600],
                      },
                    }}
                  />
                }
                label="Reeder"
                value="Reeder"
              />
            </FormGroup>
          </div>

          <div className="filter__inner">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(e) => handleChange(e)}
                    size="small"
                    sx={{
                      "&.Mui-checked": {
                        color: orange[600],
                      },
                    }}
                  />
                }
                label="Realme"
                value="Realme"
              />
            </FormGroup>
          </div>

          <div className="filter__inner">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(e) => handleChange(e)}
                    size="small"
                    sx={{
                      "&.Mui-checked": {
                        color: orange[600],
                      },
                    }}
                  />
                }
                label="Samsung"
                value="Samsung"
              />
            </FormGroup>
          </div>

          <div className="filter__inner">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(e) => handleChange(e)}
                    size="small"
                    sx={{
                      "&.Mui-checked": {
                        color: orange[600],
                      },
                    }}
                  />
                }
                label="Oppo"
                value="Oppo"
              />
            </FormGroup>
          </div>

          <div className="filter__inner">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(e) => handleChange(e)}
                    size="small"
                    sx={{
                      "&.Mui-checked": {
                        color: orange[600],
                      },
                    }}
                  />
                }
                label="Poco"
                value="Poco"
              />
            </FormGroup>
          </div>

          <div className="filter__inner">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(e) => handleChange(e)}
                    size="small"
                    sx={{
                      "&.Mui-checked": {
                        color: orange[600],
                      },
                    }}
                  />
                }
                label="Tecno"
                value="Tecno"
              />
            </FormGroup>
          </div>
        </div>

        <Sort sortName={sortName} handleChangeSort={handleChangeSort}></Sort>
      </div>
    </div>
  );
};

export default PhoneFilter;
