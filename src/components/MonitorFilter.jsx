import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { orange } from "@mui/material/colors";

const MonitorFilter = () => {
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
                                        size="small"
                                        sx={{
                                            "&.Mui-checked": {
                                                color: orange[600],
                                            },
                                        }}
                                    />
                                }
                                label="Samsung"
                            />
                        </FormGroup>
                    </div>

                    <div className="filter__inner">
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        sx={{
                                            "&.Mui-checked": {
                                                color: orange[600],
                                            },
                                        }}
                                        size="small"
                                    />
                                }
                                label="Rampage"
                            />
                        </FormGroup>
                    </div>

                    <div className="filter__inner">
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        size="small"
                                        sx={{
                                            "&.Mui-checked": {
                                                color: orange[600],
                                            },
                                        }}
                                    />
                                }
                                label="Philips"
                            />
                        </FormGroup>
                    </div>

                    <div className="filter__inner">
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        size="small"
                                        sx={{
                                            "&.Mui-checked": {
                                                color: orange[600],
                                            },
                                        }}
                                    />
                                }
                                label="Gamebooster"
                            />
                        </FormGroup>
                    </div>

                    <div className="filter__inner">
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        size="small"
                                        sx={{
                                            "&.Mui-checked": {
                                                color: orange[600],
                                            },
                                        }}
                                    />
                                }
                                label="Dell"
                            />
                        </FormGroup>
                    </div>

                    <div className="filter__inner">
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        size="small"
                                        sx={{
                                            "&.Mui-checked": {
                                                color: orange[600],
                                            },
                                        }}
                                    />
                                }
                                label="VievSonic"
                            />
                        </FormGroup>
                    </div>

                    <div className="filter__inner">
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        size="small"
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
                                        size="small"
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
                </div>
            </div>
        </div>
    );
}

export default MonitorFilter