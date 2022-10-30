import React, { useState } from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
      gender: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .required("Please Enter your password")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
      passwordConfirmation: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="form__container">
      <h1>Hello,</h1>
      <p className="form__text">
        Log in to MertShop or create an account, don't miss the discounts!
      </p>

      <div className="form_inner__container">
        <h1>Register</h1>

        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={
              formik.touched.email && formik.errors.email ? "red" : null
            }
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className={
              formik.touched.password && formik.errors.password ? "red" : null
            }
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}

          <label htmlFor="passwordConfirmation">2. Password</label>
          <input
            id="passwordConfirmation"
            name="passwordConfirmation"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.passwordConfirmation}
            className={
              formik.touched.passwordConfirmation &&
              formik.errors.passwordConfirmation
                ? "red"
                : null
            }
          />
          {formik.touched.passwordConfirmation &&
          formik.errors.passwordConfirmation ? (
            <div className="error">{formik.errors.passwordConfirmation}</div>
          ) : null}

          <p className="button__header">Gender(Optional)</p>

          <ToggleButtonGroup
            value={formik.values.alignment}
            exclusive
            onChange={formik.handleChange}
            aria-label="Platform"
          >
            <ToggleButton name="gender" className="toggle__btn" value="kadın">
              Kadın
            </ToggleButton>
            <ToggleButton name="gender" className="toggle__btn" value="erkek">
              Erkek
            </ToggleButton>
          </ToggleButtonGroup>

          <button className="form__btn" type="submit">
            Register
          </button>
        </form>

        <p>New to MertShop?</p>

        <hr className="line" />

        <Link to="/login" className="create__btn">
          If You Have a MertShop Account Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
