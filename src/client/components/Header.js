// @flow
import * as React from "react";

import styled from "@emotion/styled";
import { blackBackground } from "../styles/colors";
import BetTypes from "./BetTypes";

const Nav = styled.nav({
  position: "fixed",
  width: "100%",
  height: 50,
  top: "0",
  left: "0",
  bottom: "0",
  backgroundColor: blackBackground,
  flexDirection: "row",
  justifyContent: "center",
  display: "flex",
  "@media (min-width: 813px)": {
    display: "flex",
    width: 120,
    flexDirection: "column",
    height: "unset",
    justifyContent: "unset"
  }
});

const Header = () => (
  <Nav>
    <BetTypes />
  </Nav>
);

export default Header;
