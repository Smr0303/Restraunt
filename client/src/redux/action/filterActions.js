import axios from "axios";
import { GET_NEW_ARRIVAL } from "../constants/filterConstants";
import { START_LOADING, STOP_LOADING } from "../constants/loadingConstant";
import { SHOW_ERROR_MESSAGE } from "../constants/messageConstants";

export const getNewArrivals =
  (sortBy = "desc", limit = 3) =>
  async (dispatch) => {
    try {
      dispatch({
        type: START_LOADING,
      });
      const response = axios.get(
        `http://localhost:5000/filter?sortBy=${sortBy}&limit=${limit}`
      );
      dispatch({ type: STOP_LOADING });
      dispatch({
        type: GET_NEW_ARRIVAL,
        payload: response.data.newArrivals,
      });
    } catch (err) {
      console.log("Axios error at get arrival", err);
      dispatch({ type: STOP_LOADING });
      dispatch({
        type: SHOW_ERROR_MESSAGE,
        payload: err.response.data.errorMessage,
      });
    }
  };
