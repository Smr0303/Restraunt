import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import loadingReducer from "./reducers/loadingReducers";
import messageReducer from "./reducers/messageReducers";
import categoryReducer from "./reducers/categoryReducers";
import productReducer from "./reducers/productReducer";
import filterReducer from "./reducers/filterReducer";

const reducers = combineReducers({
  loading: loadingReducer,
  messages: messageReducer,
  categories:categoryReducer,
  products:productReducer,
  filters:filterReducer
});
const initialState = {};
const middleware = [thunk];
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
