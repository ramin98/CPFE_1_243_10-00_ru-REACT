import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { reducerProducts } from "./reducerProducts";
import { combineReducers } from "redux";
import { reducerBag } from "./reducerBag";

let reducers = combineReducers({
    products:reducerProducts,
    bag:reducerBag
})

let store = createStore(reducers, applyMiddleware(thunk))

export default store