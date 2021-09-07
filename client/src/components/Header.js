import React from "react";
import { Link, withRouter } from "react-router-dom";
import { checkAuthentication } from "./helpers/setAuthentication";
import { logOut } from "./helpers/setAuthentication";

export default withRouter(function Header() {
  const handleLogout = ({ history }) => {
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
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
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
                        User dashboard
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
                        Admin dashboard
                      </Link>
                    </li>
                  </>
                )}
                {!checkAuthentication() && (
                  <>
                    <li className="nav-item">
                      <Link to="/" className="nav-link " aria-current="page">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/SignUp"
                        className="nav-link "
                        aria-current="page"
                      >
                        SignUp
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/SignIn" className="nav-link">
                        SignIn
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
                        Logout
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
