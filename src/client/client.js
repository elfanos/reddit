// Startup point for the client side application
import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import GameContextProvider from "./contexts/GameContext";
import axios from "axios";

ReactDOM.hydrate(
  <BrowserRouter>
    <div>{renderRoutes(Routes)}</div>
  </BrowserRouter>,
  document.querySelector("#root")
);
