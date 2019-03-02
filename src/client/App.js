/**
 * Created by Rasmus on 2018-07-04.
 */
import React from "react";
import { renderRoutes } from "react-router-config";
// import Header from "./components/Header";
import { fetchCurrentUser } from "./actions/index";

const App = ({ route }) => {
  return <div>{renderRoutes(route.routes)}</div>;
};

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};
