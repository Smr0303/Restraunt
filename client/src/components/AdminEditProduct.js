import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/action/productActions";
import { getCategories } from "../redux/action/categoryActions";
import { Link } from "react-router-dom";

export default function AdminEditProduct({ match }) {
  const productId = match.params.productId;
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);

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

  useEffect(() => {
    if (!product) {
      dispatch(getProduct(productId));
      dispatch(getCategories());
    } else {
      setproductData({
        productImage: product.filename,
        productName: product.productName,
        productDescription: product.productDescription,
        productPrice: product.productPrice,
        productType: product.productType,
        productQuantity: product.productQuantity,
      });
    }
  }, [dispatch, productId, product]);

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

  const handleImageUpload = (e) => {
    setproductData({
      productImage: e.target.files[0],
    });
  };

  const handleProductSubmit = (e) => {
    e.preventDefault();
  };
  const handleProductchange = (e) => {
    setproductData({
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Fragment>
      {showHeader()}
      <div className="container my-3">
        <div className="row">
          <div className="col md-8 mx-auto">
            <Link to="../../admin/dashboard">
              <span className="fas fa-arrow-left"> Go Back</span>
            </Link>
            <div>
              <br />
              <div className="modal-content">
                <form onSubmit={handleProductSubmit}>
                  <div className="modal-header bg-warning text-white">
                    <h5 className="modal-title">Update Food</h5>
                  </div>
                  <Fragment>
                    <label className="btn btn-dark mr-4">
                      Choose file
                      <input
                        type="file"
                        name="productimage"
                        accept="images/*"
                        hidden
                        onChange={handleImageUpload}
                      />
                    </label>
                    {productImage && productImage.name ? (
                      <span className="badge badge-secondary">
                        {productImage.name}
                      </span>
                    ) : productImage ? (
                      <img
                        className="img-thumbnail"
                        style={{
                          width: "120px",
                          height: "80px",
                        }}
                        src={`/uploads/${productImage}`}
                        alt="product"
                      />
                    ) : null}
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
                    <div className="form-group col-md-6">
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
                  <div className="modal-footer">
                    <button className="btn btn-secondary">Close</button>
                    <button type="submit" className="btn btn-warning">
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
