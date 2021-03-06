import { CREATE_CATEGORY, GET_CATEGORY } from "../constants/categoryConstants";
import { START_LOADING, STOP_LOADING } from "../constants/loadingConstant";
import {
  SHOW_ERROR_MESSAGE,
  SHOW_SUCCESS_MESSAGE,
} from "../constants/messageConstants";
import axios from "axios";

export const getCategories = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get("http://localhost:5000/category/read");
    dispatch({ type: STOP_LOADING });
    dispatch({ type: GET_CATEGORY, payload: response.data.categories });
    dispatch({ type: SHOW_SUCCESS_MESSAGE, payload: response.data.message });
  } catch (err) {
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: err.response.data.errorMessage,
    });
  }
};
export const createCategory = (data) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    dispatch({ type: START_LOADING });
    const response = await axios.post(
      "http://localhost:5000/category/create",
      data,
      config
    );
    dispatch({ type: STOP_LOADING });
    dispatch({ type: CREATE_CATEGORY, payload: response.data.category });
    dispatch({
      type: SHOW_SUCCESS_MESSAGE,
      payload: response.data.successMessage,
    });
  } catch (err) {
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: err.response.data.errorMessage,
    });
  }
};
