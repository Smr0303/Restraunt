import React, { useState } from "react";
import { Link } from "react-router-dom";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import equals from "validator/lib/equals";
import { successMessage, errorMessage } from "./helpers/Message";
import Loading from "./helpers/Loading";
import { Signup } from "./api/auth";

export default function SignUp() {
  const [formData, setdata] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
    successMsg: false,
    errorMsg: false,
    loading: false,
  });
  const {
    username,
    email,
    password1,
    password2,
    successMsg,
    errorMsg,
    loading,
  } = formData;

  const handleChange = (e) => {
    setdata({
      ...formData,
      [e.target.name]: e.target.value,
      successMsg: "",
      errorMsg: "",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      isEmpty(username) ||
      isEmpty(email) ||
      isEmpty(password1) ||
      isEmpty(password2)
    ) {
      setdata({
        ...formData,
        errorMsg: "All fields are not filled",
      });
    } else if (!isEmail(email)) {
      setdata({
        ...formData,
        errorMsg: "Email is invalid",
      });
    } else if (!equals(password1, password2)) {
      setdata({
        ...formData,
        errorMsg: "Passwords do not match",
      });
    } else {
      const { username, email, password1 } = formData;
      const data = { username, email, password1 };
      setdata({
        ...formData,
        loading: true,
      });
      Signup(data)
      .then((res) => {
        setdata({
          username: "",
          email: "",
          password1: "",
          password2: "",
          successMsg: res.data.successmsg,
          errorMsg: false,
          loading: false,
        })
      }).catch((err)=>{
        console.log(err.response);
        setdata({
          ...formData,
          loading:false,
          errorMsg:err.response.data.message
        });
      })
    }
  };

  return (
    <div>
      {loading && Loading()}
      {errorMsg && errorMessage(errorMsg)}
      {successMsg && successMessage(successMsg)}
      <form type="submit" className="sign-up-form" noValidate>
        {/*username*/}
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fa fa-user fa-lg"></i>
            </span>
          </div>
          <input
            onChange={handleChange}
            name="username"
            value={username}
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        {/*email*/}
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fa fa-envelope fa-lg "></i>
            </span>
          </div>
          <input
            onChange={handleChange}
            name="email"
            value={email}
            type="email"
            className="form-control"
            placeholder="Email"
            aria-label="Email"
            aria-describedby="basic-addon2"
          />
        </div>
        {/*password*/}
        <div className="input-group mb-3">
          <span className="input-group-text">
            <i className="fa fa-lock"></i>
          </span>
          <input
            onChange={handleChange}
            name="password1"
            value={password1}
            type="password"
            className="form-control"
            placeholder="Password"
            aria-label="Password"
            aria-describedby="basic-addon2"
          />
        </div>
        {/*password*/}
        <div className="input-group mb-3">
          <span className="input-group-text">
            <i className="fa fa-lock"></i>
          </span>
          <input
            onChange={handleChange}
            name="password2"
            value={password2}
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            aria-label="Confirm Password"
            aria-describedby="basic-addon2"
          />
        </div>
        <div className="form-group">
          <button
            onClick={handleSubmit}
            type="button"
            className="btn btn-primary"
          >
            SignUp
          </button>
        </div>
        <div>
          <p className="text-center text-black">
            {""}
            Alerady have an account?<Link to="/SignIn">LogIn</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
