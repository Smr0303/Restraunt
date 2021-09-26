import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/action/productActions";

export default function AdminEditProduct({ match }) {
  const productId = match.params.productId;
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.products);

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

  return <div>{console.log(productId)}</div>;
}
