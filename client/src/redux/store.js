import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import loadingReducer from "./reducers/loadingReducers";
import messageReducer from "./reducers/messageReducers";

const reducers = combineReducers({
  loading: loadingReducer,
  message: messageReducer,
});
const initialState = {};
const middleware = [thunk];
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
