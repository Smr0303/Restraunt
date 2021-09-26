import React, { useEffect } from "react";
import {useDispatch} from "react-redux";
import {getProduct} from "../redux/action/productActions";

export default function AdminEditProduct({ match }) {
  const productId = match.params.productId;
 const dispatch = useDispatch();

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

  useEffect(()=>{
dispatch(getProduct());
  },[dispatch,productId])


  return <div>{console.log(productId)}</div>;
}
