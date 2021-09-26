import { deleteProducts } from "../redux/action/productActions";
import {Link} from "react-router-dom";
import { useDispatch } from "react-redux";
export default function Card({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="col-md-4 my-3">
      <div className="card h-100">
        {console.log(product.filename)}
    <a href="#!">
          <img
            className="img-fluid w-100"
            src={`http://localhost:5000/uploads/${product.filename}`}
            alt="product"
            />
         </a>
        <div className="card-body text-center">
          <h5>{product.productName}</h5>
          <hr />
          <h6 className="mb-3">
            <span className=" text-secondary mr-2">
              {product.productPrice.toLocaleString("en-US", {
                style: "currency",
                currency: "INR",
              })}
            </span>
          </h6>
          <p>{product.productDescription}</p>
          <Link to ="/admin/edit/product" className="btn btn-secondary btn-sm mr-1 my-1" type="Link">
            <i className="far fa-edit pr-1"> Edit</i>
          </Link>
          <button
            className="btn btn-danger btn-sm"
            type="button"
            onClick={() => dispatch(deleteProducts(product._id))}
          >
            <i className="fas fa-trash-alt"> Delete</i>
          </button>
        </div>
      </div>
    </div>
  );
}
