import React, { useState } from "react";
import { createCategory } from "./api/category";
import isEmpty from "validator/lib/isEmpty";

export default function AdminDashboard() {
  const [category, setCategory] = useState("");
  const handleChange = (e) => {
    setCategory(e.target.value);
    console.log(category);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { category };
    createCategory(data)
      .then((res) => {
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log(err, "Axios");
      });
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
                <label className="text-secondary">Category</label>
                <input
                  name="category"
                  value={category}
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                />
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
