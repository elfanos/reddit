// @flow
import * as React from "react";
import { noStyleButton } from "./Button";
import Horse from "./Horse";
import { header } from "../styles/fonts";
import idx from "idx";
import { blackBackground, whiteBackground, secondary } from "../styles/colors";
type Props = {
  start: *
};
const getFirstLastName = (firstName?: string, lastName?: string) =>
  `${firstName || ""} ${lastName || ""}`;
const GameStart = ({ start: { driver, horse, number } }: Props) => {
  const [collapsed, setCollapsed] = React.useState(true);
  const raceInfo = React.useRef(null);
  React.useEffect(
    () => {
      //const setProperty = idx(raceInfo, _ => _raceInfo.current.style.setProperty);
      if (raceInfo && raceInfo.current && raceInfo.current.style) {
        return collapsed
          ? raceInfo.current.style.setProperty("display", "none", "important")
          : raceInfo.current.style.setProperty("display", "flex", "important");
      }
    },
    [collapsed]
  );
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        fontSize: "0.6em",
        maxWidth: 600,
        width: "100%"
      }}
    >
      <button
        onClick={() => setCollapsed(collapsed ? false : true)}
        css={{
          ...noStyleButton,
          "&:focus": {
            outline: "none"
          },
          ...header,
          cursor: "pointer",
          border: "none",
          width: "100%",
          display: "flex",
          color: whiteBackground,
          backgroundColor: secondary,
          div: { paddingLeft: 10 },
          height: 40,
          fontSize: "0.7em",
          "@media (min-width: 813px)": {
            fontSize: "1em"
          }
        }}
      >
        <div css={{ alignSelf: "center", width: 25 }}>{number}</div>
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start"
          }}
        >
          <div>{`Horse: ${horse.name}`}</div>
          <div>{`Namn: ${getFirstLastName(
            driver.firstName,
            driver.lastName
          )}`}</div>
        </div>
      </button>
      <div
        css={{
          background: "white",
          display: "none",
          justifyContent: "center",
          textAlign: "center"
        }}
        ref={raceInfo}
      >
        <Horse horse={horse} />
      </div>
    </div>
  );
};
export default GameStart;
