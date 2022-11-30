import React from "react";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Sort = ({ handleChangeSort, sortName }) => {
  return (
    <Box className="sorting__price__con">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sorting</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortName}
          label="Age"
          onChange={handleChangeSort}
        >
          <MenuItem value={"def"}>Default</MenuItem>
          <MenuItem value={"lth"}>Low to high</MenuItem>
          <MenuItem value={"htl"}>high to low</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Sort;
