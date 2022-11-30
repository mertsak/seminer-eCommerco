import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { orange } from "@mui/material/colors";
import { useDispatch } from "react-redux";

import Sort from "./Sort.jsx";

import {
  laptopHandleFilter,
  laptopHandleSorting,
} from "../redux/commerceSlice.js";

const LaptopFilter = () => {
  const dispatch = useDispatch();

  const [sortName, setSortName] = React.useState("def");

  const handleChangeSort = (event) => {
    setSortName(event.target.value);
  };

  useEffect(() => {
    dispatch(laptopHandleSorting(sortName));
  }, [sortName, dispatch]);

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

  dispatch(laptopHandleFilter(productBrand));

  const [drop, setDrop] = useState(null);

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
                    value="Apple"
                    size="small"
                    sx={{
                      "&.Mui-checked": {
                        color: orange[600],
                      },
                    }}
                  />
                }
                label="Apple"
              />
            </FormGroup>
          </div>

          <div className="filter__inner">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(e) => handleChange(e)}
                    value="Casper"
                    sx={{
                      "&.Mui-checked": {
                        color: orange[600],
                      },
                    }}
                    size="small"
                  />
                }
                label="Casper"
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
                    value="Hp"
                    sx={{
                      "&.Mui-checked": {
                        color: orange[600],
                      },
                    }}
                  />
                }
                label="Hp"
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
                    value="Asus"
                    sx={{
                      "&.Mui-checked": {
                        color: orange[600],
                      },
                    }}
                  />
                }
                label="Asus"
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
                    value="Monster"
                    sx={{
                      "&.Mui-checked": {
                        color: orange[600],
                      },
                    }}
                  />
                }
                label="Monster"
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
                    value="Msi"
                    sx={{
                      "&.Mui-checked": {
                        color: orange[600],
                      },
                    }}
                  />
                }
                label="Msi"
              />
            </FormGroup>
          </div>
        </div>

        <Sort sortName={sortName} handleChangeSort={handleChangeSort}></Sort>
      </div>
    </div>
  );
};

export default LaptopFilter;
