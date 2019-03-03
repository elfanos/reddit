/**
 * Created by Rasmus on 2018-07-04.
 */
import React from "react";
import { renderRoutes } from "react-router-config";
import Header from "./components/Header";
import styled from "@emotion/styled";
import GameContextProvider from "./contexts/GameContext";

const Layout = styled.div({
  paddingLeft: 0,
  height: "100%",
  "@media (min-width: 813px)": {
    paddingLeft: 120
  }
});

const App = ({ route, location }: *) => (
  <GameContextProvider pathname={location.pathname}>
    <div>
      <Header />
      <Layout>{renderRoutes(route.routes)}</Layout>
    </div>
  </GameContextProvider>
);

export default {
  component: App
};
