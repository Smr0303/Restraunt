import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form type="submit" className="sign-up-form">
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
  );
}
