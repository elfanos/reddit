/**
 * Created by Rasmus on 2018-07-03.
 */
import React from "react";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import App from "./App";
import UsersListPage from "./pages/UsersListPage";
import NotFoundPage from "./pages/NotFoundPage";
import AdminListPage from "./pages/AdminsListPage";
export default [
  {
    ...App,
    routes: [
      {
        ...GamePage,
        path: "/",
        exact: true
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
