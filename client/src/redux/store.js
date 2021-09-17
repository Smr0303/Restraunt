import {combineReducers,createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import Loading from "../components/helpers/Loading";

const reducers=combineReducers({
loading:Loading
});
const initialState={}
const middleware=[thunk];
const store=createStore(reducers,initialState,composeWithDevTools(applyMiddleware(...middleware)))
export default store;