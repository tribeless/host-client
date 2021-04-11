import {combineReducers} from "redux";
import {pageReducer} from "./reducers";

const combinedReducers = combineReducers({
    pageReducer
});

export default combinedReducers;