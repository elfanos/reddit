// @flow
import * as React from "react";
import styled from "@emotion/styled";
import GameStart from "./GameStart";
import { header } from "../styles/fonts";
import { secondary, whiteBackground } from "../styles/colors";
import { format } from "date-fns";
import sv from "date-fns/locale/sv";

type Props = {
  race: *
};
const GameRace = ({
  race: { number, name, startTime, sport, starts }
}: Props) => (
  <div
    css={{
      display: "flex",
      flexDirection: "column",
      fontSize: 25,
      paddingTop: 20,
      width: "90%",
      "@media (min-width: 813px)": {
        width: "unset"
      }
    }}
  >
    <div
      css={{
        ...header,
        width: "100%",
        display: "flex",
        fontSize: "1em",
        maxWidth: 900,
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <div>{`Race: ${number}`}</div>
      <div
        css={{
          fontSize: "0.6em",
          "@media (min-width: 813px)": {
            fontSize: "1em"
          }
        }}
      >{`Namn: ${name ? name.split(",")[0].substring(0, 20) : sport}`}</div>
      <div
        css={{
          fontSize: "0.6em",
          "@media (min-width: 813px)": {
            fontSize: "1em"
          }
        }}
      >
        {`Datum: ${format(new Date(startTime), "dddd ", { locale: sv }) +
          "klockan: " +
          format(new Date(startTime), "HH:MM")}`}
      </div>
    </div>
    <div
      css={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        "@media (min-width: 813px)": {
          alignItems: "unset"
        }
      }}
    >
      {starts.map((start, index) => <GameStart key={index} start={start} />)}
    </div>
  </div>
);

export default GameRace;
