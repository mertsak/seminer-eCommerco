import React from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { register } from "../firebase";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();

  const notify = (values) => {
    if (
      values.email === "" &&
      values.password === "" &&
      values.passwordConfirmation === ""
    ) {
      toast.error("Please fill the form");
    } else if (values.email === "") {
      toast.error("Please enter your email");
    } else if (values.password === "") {
      toast.error("Please enter your password");
    } else if (values.passwordConfirmation === "") {
      toast.error("Please confirm your password");
    }
  };

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
      passwordConfirmation: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Please confirm your password"),
    }),
    onSubmit: async (values) => {
      const user = await register(values.email, values.password);
      if (user) {
        navigate("/login");
      }
      console.log(user);
    },
  });
  return (
    <div className="form__container">
      <Toaster position="top-right" reverseOrder={false} />
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
            <ToggleButton name="gender" className="toggle__btn" value="kad??n">
              Kad??n
            </ToggleButton>
            <ToggleButton name="gender" className="toggle__btn" value="erkek">
              Erkek
            </ToggleButton>
          </ToggleButtonGroup>

          <button
            onClick={() => notify(formik.values)}
            className="form__btn"
            type="submit"
          >
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
