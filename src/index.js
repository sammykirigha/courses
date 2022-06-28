import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redux/reducers";

const store = configureStore({ reducer: rootReducer });
render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById("app")
);
