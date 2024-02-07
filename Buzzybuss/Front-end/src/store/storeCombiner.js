import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import blogReducer from "./blog/blogReducer";
export default combineReducers({ userReducer, blogReducer });
