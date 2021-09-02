import React from "react";

export default function SignUp() {
  return (
    <form className="sign-up-form" >
        {/*username*/}
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">
           <i className="fa fa-user fa-lg"></i>
          </span>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
{/*email*/}
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i className="fa fa-envelope fa-lg "></i>
          </span>
        </div>
        <input
          type="email"
          class="form-control"
          placeholder="Email"
          aria-label="Email"
          aria-describedby="basic-addon2"
        />
      </div>
      {/*password*/}
      <div class="input-group mb-3">
      <span class="input-group-text">
            <i className="fa fa-lock"></i>
          </span>
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          aria-label="Password"
          aria-describedby="basic-addon2"
        />
      </div>
      {/*password*/}
      <div class="input-group mb-3">
      <span class="input-group-text">
            <i className="fa fa-lock"></i>
          </span>
        <input
          type="password"
          class="form-control"
          placeholder="Confirm Password"
          aria-label="Confirm Password"
          aria-describedby="basic-addon2"
        />
      </div>
      <div className="form-group">
      <button type="button" class="btn btn-primary">SignUp</button>
</div>
<div>
    <p className="text-center text-black"> Alerady have an account?<a href="">LogIn</a></p>
</div>

    </form>
  );
}
