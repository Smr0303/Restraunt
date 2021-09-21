import { GET_CATEGORY } from "../constants/categoryConstants";
import { START_LOADING, STOP_LOADING } from "../constants/loadingConstant";
import {
  SHOW_ERROR_MESSAGE,
  SHOW_SUCCESS_MESSAGE
} from "../constants/messageConstants";
import axios from "axios";

export const getCategories = () => async (dispatch) => {
  try {
    dispatch({type:START_LOADING});
    const response = axios.get("http://localhost:5000/category/read");
    dispatch({type:STOP_LOADING});
    dispatch({type:STOP_LOADING});
    dispatch({type:GET_CATEGORY,payload:(await response).data.categories});
    dispatch({type:SHOW_SUCCESS_MESSAGE,payload:(await response).data.me})
  } catch (err) {
      dispatch({type:STOP_LOADING});
      dispatch({type:SHOW_ERROR_MESSAGE,payload:err.response.data.errorMessage});
  }
};
