import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/action/productActions";
import {getCategories} from "../redux/action/categoryActions";

export default function AdminEditProduct({ match }) {
  const productId = match.params.productId;
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.products);
  const {categories}=useSelector(state=>state.categories);

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

  return <div>{console.log({categories})}</div>;
}
