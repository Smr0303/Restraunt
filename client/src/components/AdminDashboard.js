import React, { Fragment, useState } from "react";
import { createCategory } from "./api/category";
import isEmpty from "validator/lib/isEmpty";
import { errorMessage, successMessage } from "./helpers/Message";
import Loading from "./helpers/Loading";

export default function AdminDashboard() {
  const [category, setCategory] = useState("");
  const [errorMsg, seterrorMsg] = useState(false);
  const [successMsg, setsuccessMsg] = useState(false);
  const [loading, setloading] = useState(false);
  const handleChange = (e) => {
    setCategory(e.target.value);
    seterrorMsg("");
    setsuccessMsg("");
    console.log(category);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmpty(category)) {
      seterrorMsg("Please enter category")
    } else {
      setloading(true);

      const data = { category };
  
      createCategory(data)
        .then((res) => {
          setloading(false);
          setsuccessMsg(res.data.successMessage);
        })
        .catch((err) => {
          setloading(false);
          seterrorMsg(err.response.data.errorMessage);
        });
    }
  };
  const showHeader = () => {
    return (
      <div className="bg-dark text-white ">
        <div className="container align-items-center justify-content-center">
          <div className="row ">
            <div className="col-md-6">
              <i className="fa fa-home"> Dashboard</i>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const showActionBtns = () => {
    return (
      <div className="bg-light">
        <div className="container">
          <div className="row pb-3">
            <div className="col-md-4 my-1 mw-100">
              <button
                className="btn btn-outline-info btn-block"
                data-toggle="modal"
                data-target="#CategoryModal"
              >
                <i className="fas fa-plus">Add Category</i>
              </button>
            </div>
            <div className="col-md-4 my-1 mw-100  ">
              <button className="btn btn-outline-warning btn-block">
                <i className="fas fa-plus">Add Food Item</i>
              </button>
            </div>
            <div className="col-md-4 my-1 ">
              <button className="btn btn-outline-success btn-block">
                <i className="fas fa-plus">View Orders</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const showModal = () => {
    return (
      <div className="modal fade" id="CategoryModal">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content row">
            <form onSubmit={handleSubmit}>
              <div className="modal-header bg-info text-white">
                <h5>Add Category</h5>
                <button className="close" data-dismiss="modal">
                  <span>
                    <i className="fas fa-times"></i>
                  </span>
                </button>
              </div>
              <div className="modal-body">
                {errorMsg && errorMessage(errorMsg)}
                {successMsg && successMessage(successMsg)}
                {loading ? (
                  Loading()
                ) : (
                  <Fragment>
                    <label className="text-secondary">Category</label>
                    <input
                      name="category"
                      value={category}
                      type="text"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </Fragment>
                )}
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary">Close</button>
                <button type="submit" className="btn btn-info">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      {showHeader()}
      {showActionBtns()}
      {showModal()}
    </div>
  );
}
