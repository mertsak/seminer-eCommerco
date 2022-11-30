import React, { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { orange } from "@mui/material/colors";
import { useDispatch } from "react-redux";

import Sort from "./Sort.jsx";

import {
  monitorHandleFilter,
  monitorHandleSorting,
} from "../redux/commerceSlice.js";

const MonitorFilter = () => {
  const dispatch = useDispatch();
  const [drop, setDrop] = useState(null);
  const [sortName, setSortName] = React.useState("def");

  const handleChangeSort = (event) => {
    setSortName(event.target.value);
  };

  const handleDrop = () => {
    setDrop(!drop);
  };

  const [productBrand, setProductBrand] = useState({
    brands: [],
  });

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

  useEffect(() => {
    dispatch(monitorHandleSorting(sortName));
  }, [sortName, dispatch]);

  dispatch(monitorHandleFilter(productBrand));

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
                    sx={{
                      "&.Mui-checked": {
                        color: orange[600],
                      },
                    }}
                    size="small"
                  />
                }
                label="Rampage"
                value="Rampage"
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
                label="Philips"
                value="Philips"
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
                label="Gamebooster"
                value="Gamebooster"
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
                label="Dell"
                value="Dell"
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
                label="ViewSonic"
                value="ViewSonic"
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
                label="Asus"
                value="Asus"
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
                label="Monster"
                value="Monster"
              />
            </FormGroup>
          </div>
        </div>

        <Sort sortName={sortName} handleChangeSort={handleChangeSort}></Sort>
      </div>
    </div>
  );
};

export default MonitorFilter;
