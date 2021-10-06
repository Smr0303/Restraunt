import React from "react";
import { Link, withRouter } from "react-router-dom";
import { checkAuthentication } from "./helpers/setAuthentication";
import { logOut } from "./helpers/setAuthentication";

export default withRouter(function Header({history}) {
  
  const handleLogout = () => {
    logOut(() => {
      history.push("/");
    });
  };
  return (
    <>
      <div id="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              Logo
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                {checkAuthentication() && checkAuthentication().role === 0 && (
                  <>
                    <li className="nav-item">
                      <Link
                        to="/user/dashboard"
                        className="nav-link "
                        aria-current="page"
                      >
                        <i className="fa fa-home"></i> User dashboard
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/shop"
                        className="nav-link "
                        aria-current="page"
                      >
                        <i className="fa fa-shopping"></i> Shop
                      </Link>
                    </li>
                  </>
                )}
                {checkAuthentication() && checkAuthentication().role === 1 && (
                  <>
                    <li className="nav-item">
                      <Link
                        to="/admin/dashboard"
                        className="nav-link "
                        aria-current="page"
                      >
                        <i className="fa fa-home"></i> Admin dashboard
                      </Link>
                    </li>
                  </>
                )}
                {!checkAuthentication() && (
                  <>
                    <li className="nav-item">
                      <Link to="/" className="nav-link " aria-current="page">
                        <i className="fa fa-home"></i> Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/shop"
                        className="nav-link "
                        aria-current="page"
                      >
                        <i className="fas fa-shopping-bag"></i> Shop
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/SignUp"
                        className="nav-link "
                        aria-current="page"
                      >
                        <i className="fa fa-edit"></i> SignUp
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/SignIn" className="nav-link">
                        <i className="fa fa-user-secret"></i> SignIn
                      </Link>
                    </li>
                  </>
                )}
                {checkAuthentication() && (
                  <>
                    <li className="nav-item">
                      <button
                        className="btn btn-link text-secondary text-decoration-none "
                        aria-current="page"
                        onClick={handleLogout}
                      >
                        <i className="fa fa-sign-out-alt"></i> Logout
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
});
