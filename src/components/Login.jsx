import React from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login as loginHandle } from "../redux/authSlice";
import { login } from "../firebase";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const notify = (values) => {
    if (values.email === "" && values.password === "") {
      toast.error("Please fill the form");
    } else if (values.email === "") {
      toast.error("Please enter your email");
    } else if (values.password === "") {
      toast.error("Please enter your password");
    }
  };

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
    onSubmit: async (values) => {
      const user = await login(values.email, values.password);
      dispatch(loginHandle(user));
      if (user) {
        navigate("/");
      }
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

          {console.log(formik)}

          <button
            onClick={() => notify(formik.values)}
            className="form__btn"
            type="submit"
          >
            Login
          </button>
        </form>

        <p>New to MertShop?</p>

        <hr className="line" />

        <Link to="/register" className="create__btn">
          Create Your MertShop Account
        </Link>
      </div>
    </div>
  );
};

export default Login;
