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

  const handleImageUpload=(e)=>{
    setproductData({
      productImage:e.target.value
    })

  }

  const handleProductSubmit=(e)=>{
    e.preventDefault();

  }

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
                      {" "}
                      Choose file
                      <input type="file" 
                      name="productimage"
                      accept="images/*"
                      hidden
                      onChange={handleImageUpload}/>
                    </label>
                  </Fragment>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
