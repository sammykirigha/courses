import rootReducer from "./reducers";
import { applyMiddleware } from "redux";
import {configureStore} from '@reduxjs/toolkit'
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import logger from "redux-logger";
import thunk from "redux-thunk";

export default function store(initialState) {
    return configureStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk, logger))
    );
}
