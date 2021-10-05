import { deleteProducts } from "../redux/action/productActions";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
export default function Card({ product, adminPage = false, homePage = false }) {
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
          {adminPage && (
            <>
              <Link
                to={`/admin/edit/${product._id}`}
                className="btn btn-secondary btn-sm mr-1 my-1"
                type="Link"
              >
                <i className="far fa-edit pr-1"> Edit</i>
              </Link>
              <button
                className="btn btn-danger btn-sm"
                type="button"
                onClick={() => dispatch(deleteProducts(product._id))}
              >
                <i className="fas fa-trash-alt"> Delete</i>
              </button>
            </>
          )}
          {homePage && (
            <>
              <Link
                to={`/admin/edit/${product._id}`}
                className="btn btn-primary btn-sm mr-1 my-1"
                type="Link"
              >
               View Product
              </Link>
              <button
                className="btn btn-warning btn-sm"
                type="button"
                onClick={() => dispatch(deleteProducts(product._id))}
              >
     Add to Cart
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
