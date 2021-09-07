import React, { useState } from "react";
import { Link,useHistory } from "react-router-dom";
import { errorMessage } from "./helpers/Message";
import Loading from "./helpers/Loading";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import { Signin } from "./api/auth";
import { checkAuthentication, setAuthentication } from "./helpers/setAuthentication";

export default function SignIn() {
  let history=useHistory();
  const [formData, setdata] = useState({
    email: "",
    password: "",
    errorMsg: false,
    loading: false,
  });
  const { email, password, errorMsg, loading } = formData;

  const handleChange = (e) => {
    setdata({
      ...formData,
      [e.target.name]: e.target.value,
      errorMsg: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmpty(email) || isEmpty(password)) {
      setdata({
        ...formData,
        errorMsg: "All fields are not filled",
      });
    } else if (!isEmail(email)) {
      setdata({
        ...formData,
        errorMsg: "Email is invalid",
      });
    } else {
      const { email, password } = formData;
      const data = { email, password };
      setdata({
        ...formData,
        loading: true,
      });
      Signin(data)
        .then((res) => {
const {token,user}=res.data;
setAuthentication(token,user);
if(checkAuthentication()&& checkAuthentication().role===1){
  history.push('/admin/dashboard');
}
else{
  console.log("redirect to user");
  history.push('/user/dashboard');
}
})
        .catch((err) => {
          console.log("SignIn axios error", err);
        });
    }
  };

  return (
    <div className="sign-in-container">
      <div className="row vh-100">
        <div className="col-md-5 mx-auto align-self-center w-50">
          {loading && Loading()}
          {errorMsg && errorMessage(errorMsg)}
          <form type="submit" className="sign-in-form" noValidate>
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
                name="password"
                value={password}
                type="password"
                className="form-control"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon2"
              />
            </div>
            <div className="form-group">
              <button
                onClick={handleSubmit}
                type="button"
                className="btn btn-primary w-100 btn-lg btn-block align-self-center"
              >
                SignIn
              </button>
            </div>
            <div className="form-line">
              <p className="text-xl-center text-white">
                Dont have an account?<Link to="/SignUp">Create account</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
