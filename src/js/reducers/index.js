import { combineReducers } from "redux";
import shoppingReducer from "./shoppingReducer";

export default combineReducers({ items: shoppingReducer });