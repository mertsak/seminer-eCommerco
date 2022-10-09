import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

import * as Yup from "yup";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .required("Please Enter your password")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="login__container">
      <h1>Hello,</h1>
      <p className="login__text">Log in to MertShop or create an account, don't miss the discounts!</p>

      <div className="login__form">
        <h1>Login</h1>

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

          <button type="submit">Submit</button>
        </form>

        <p>New to Amazon?</p>

        <hr className="line" />

        <Link to="/register" className="create__btn">
          Create Your MertShop Account
        </Link>
      </div>
    </div>
  );
};

export default Login;
