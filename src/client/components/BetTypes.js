// @flow
import * as React from "react";
import { GameContext } from "../contexts/GameContext";
import { UILink } from "./Button";

const BetTypes = () => (
  <GameContext.Consumer>
    {({ betTypes, selectedGameType }) =>
      betTypes.map(betType => (
        <UILink key={betType} to={`/${betType}`}>
          {betType}
        </UILink>
      ))
    }
  </GameContext.Consumer>
);

export default BetTypes;
