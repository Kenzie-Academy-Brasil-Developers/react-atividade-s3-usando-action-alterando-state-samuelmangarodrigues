import { createStore, combineReducers } from "redux";
import userReducer from "./modules/reducer";

const reducers = combineReducers({ user: userReducer });
const store = createStore(reducers);

export default store;
