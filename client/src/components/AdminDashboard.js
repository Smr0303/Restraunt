import React, { Fragment, useState } from "react";
import isEmpty from "validator/lib/isEmpty";
import { errorMessage, successMessage } from "./helpers/Message";
import Loading from "./helpers/Loading";
// import { getCategories } from "./api/category";
import { createProduct } from "../redux/action/productActions";
import { useSelector, useDispatch } from "react-redux";
import { clear_messages } from "../redux/action/messageActions";
import { createCategory } from "../redux/action/categoryActions";

export default function AdminDashboard() {
  const { successMsg, errorMsg } = useSelector((state) => state.messages);
  const { loading } = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  const [category, setCategory] = useState("");
  const [clientSideErrorMsg, setclientSideErrorMsg] = useState("");
  const [productData, setproductData] = useState({
    productImage: null,
    productName: "",
    productDescription: "",
    productPrice: "",
    productType: "",
    productQuantity: "",
  });
  const {
    productImage,
    productName,
    productDescription,
    productPrice,
    productType,
    productQuantity,
  } = productData;

  const handleChange = (e) => {
    setCategory(e.target.value);
    dispatch(clear_messages());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmpty(category)) {
      setclientSideErrorMsg("Please enter category");
    } else {
      const data = { category };
      dispatch(createCategory(data));
      dispatch(clear_messages());
    }
  };

  const handleProductimage = (e) => {
    setproductData({
      ...productData,
      [e.target.name]: e.target.files[0],
    });
    console.log(productImage);
    dispatch(clear_messages());
  };
  const handleProductchange = (e) => {
    setproductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
    dispatch(clear_messages());
  };

  const handleProductsubmit = (e) => {
    e.preventDefault();
    if (productImage === null) {
      setclientSideErrorMsg("Please upload image");
    } else if (
      isEmpty(productName) ||
      isEmpty(productPrice) ||
      isEmpty(productDescription)
    ) {
      setclientSideErrorMsg("All input fields are not filled");
    } else if (isEmpty(productType)) {
      setclientSideErrorMsg("Please select a category");
      dispatch(clear_messages());
    } else if (isEmpty(productQuantity)) {
      setclientSideErrorMsg("Please enter the quantity");
      dispatch(clear_messages());
    } else {
      const formData = new FormData();
      formData.append("productImage", productImage);
      formData.append("productName", productName);
      formData.append("productPrice", productPrice);
      formData.append("productDescription", productDescription);
      formData.append("productType", productType);
      formData.append("productQuantity", productQuantity);

      dispatch(createProduct(formData));
      setproductData({
        productImage: null,
        productName: "",
        productDescription: "",
        productPrice: "",
        productType: "",
        productQuantity: "",
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
              <button
                className="btn btn-outline-warning btn-block"
                data-toggle="modal"
                data-target="#FoodModal"
              >
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
  const showCategorymodal = () => {
    return (
      <div className="modal fade" id="CategoryModal">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content row">
            <form onSubmit={handleSubmit}>
              <div className="modal-header bg-info text-white">
                <h5>Add Category</h5>
                <button
                  className="close"
                  data-dismiss="modal"
                  onClick={() => {
                    dispatch(clear_messages());
                  }}
                >
                  <span>
                    <i className="fas fa-times"></i>
                  </span>
                </button>
              </div>
              <div className="modal-body">
                {clientSideErrorMsg && errorMessage(clientSideErrorMsg)}
                {errorMsg && errorMessage(errorMsg)}
                {successMsg && successMessage(successMsg)}
                {loading ? (
                  <div className="text-center">{Loading()}</div>
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
  const showFoodmodal = () => {
    return (
      <div className="modal fade" id="FoodModal">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content row">
            <form
              onSubmit={handleProductsubmit}
              method="post"
              encType="multipart/form-data"
            >
              <div className="modal-header bg-warning text-white">
                <h5>Add Food</h5>
                <button
                  className="close"
                  data-dismiss="modal"
                  onClick={() => {
                    dispatch(clear_messages());
                  }}
                >
                  <span>
                    <i className="fas fa-times"></i>
                  </span>
                </button>
              </div>
              <div className="modal-body">
                {clientSideErrorMsg && errorMessage(clientSideErrorMsg)}
                {errorMsg && errorMessage(errorMsg)}
                {successMsg && successMessage(successMsg)}
                {loading ? (
                  <div className="text-center">{Loading()}</div>
                ) : (
                  <Fragment>
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        name="productImage"
                        onChange={handleProductimage}
                      />
                      <label className="custom-file-label">Choose File</label>
                    </div>
                    <div className="form-group">
                      <label className="text-secondary">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="productName"
                        value={productName}
                        onChange={handleProductchange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="text-secondary">Price</label>
                      <input
                        type="text"
                        className="form-control"
                        name="productPrice"
                        value={productPrice}
                        onChange={handleProductchange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="text-secondary">Description</label>
                      <textarea
                        type="text"
                        className="form-control"
                        rows="3"
                        name="productDescription"
                        value={productDescription}
                        onChange={handleProductchange}
                      ></textarea>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label className="text-secondary">Category</label>
                        {
                          <select
                            className="custom-select mr-sm-2"
                            name="productType"
                            onChange={handleProductchange}
                          >
                            <option value="">Choose one</option>
                            {categories &&
                              categories.map((c) => {
                                return (
                                  <option key={c._id} value={c._id}>
                                    {c.category}
                                  </option>
                                );
                              })}
                          </select>
                        }
                      </div>
                      <div className="form-group col-md-6">
                        <label className="text-secondary">Quantity</label>
                        <input
                          className="form-control"
                          type="number"
                          min="0"
                          name="productQuantity"
                          value={productQuantity}
                          onChange={handleProductchange}
                        />
                      </div>
                    </div>
                  </Fragment>
                )}
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary">Close</button>
                <button type="submit" className="btn btn-warning">
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
      {showCategorymodal()}
      {showFoodmodal()}
    </div>
  );
}
