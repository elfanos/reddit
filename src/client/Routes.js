/**
 * Created by Rasmus on 2018-07-03.
 */
import React from "react";
import GamePage from "./pages/GamePage";
import App from "./App";
import NotFoundPage from "./pages/NotFoundPage";
export default [
  {
    ...App,
    routes: [
      {
        ...GamePage,
        path: "/V75",
        exact: true
      },
      {
        ...GamePage,
        path: "/V65",
        exact: true
      },
      {
        ...GamePage,
        path: "/V64",
        exact: true
      },
      {
        ...GamePage,
        path: "/V4",
        exact: true
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
