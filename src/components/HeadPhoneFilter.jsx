import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { orange } from "@mui/material/colors";

const HeadPhoneFilter = () => {
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
                                label="Sony"
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
                                label="JBL"
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
                                label="Focal"
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
                                label="Sennheiser"
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
                                label="Beyerdynamic"
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
                </div>
            </div>
        </div>
    );
}

export default HeadPhoneFilter