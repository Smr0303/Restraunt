import axios from "axios";
import { START_LOADING, STOP_LOADING } from "../constants/loadingConstant";
import {
  SHOW_SUCCESS_MESSAGE,
  SHOW_ERROR_MESSAGE,
} from "../constants/messageConstants";
import { CREATE_PRODUCT, GET_PRODUCT } from "../constants/productConstants";

export const createProduct = (data) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    dispatch({ type: START_LOADING });
    const response = await axios.post(
      "http://localhost:5000/product/create",
      data,
      config
    );
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_SUCCESS_MESSAGE,
      payload: response.data.successMessage,
    });
    dispatch({ type: CREATE_PRODUCT, payload: response.data.newProduct });
  } catch (err) {
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: err.response.data.errorMessage,
    });
  }
};
export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get("http://localhost:5000/product/read");
    dispatch({ type: STOP_LOADING });
    dispatch({ type: GET_PRODUCT, payload: response.data.products });
  } catch (err) {
    console.log("Axios error at get req", err);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: err.response.data.errorMessage,
    });
  }
};
