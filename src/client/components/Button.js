/* @flow-strict */
import styled from "@emotion/styled";
import { whiteBackground, secondary } from "../styles/colors";
import { Link } from "react-router-dom";
export const noStyleButton = {
  background: "none",
  color: "inherit",
  border: "none",
  padding: "0",
  font: "inherit",
  cursor: "pointer"
};

const buttonStyle = {
  border: "none",
  cursor: "pointer",
  position: "relative",
  padding: "15px 20px",
  textAlign: "center",
  textOverflow: "ellipsis",
  ":disabled": {
    opacity: 0.5,
    cursor: "not-allowed"
  }
};
export const UIButton = styled.button({
  ...noStyleButton,
  ...buttonStyle
});
export const UILink = styled(Link)({
  ...buttonStyle,
  textDecoration: "none",
  color: whiteBackground,
  "&:active": {
    color: secondary
  }
});
