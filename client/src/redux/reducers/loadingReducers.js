import { START_LOADING, STOP_LOADING } from "../constants/loadingConstant";
const initialState = {
  loading: false,
};
const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        loading: true,
      };
    case STOP_LOADING:
      return {
        loading: false,
      };
    default:
      return state;
  }
};
export default loadingReducer;
