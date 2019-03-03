// @flow
import * as React from "react";
import { blackBackground } from "../styles/colors";
import { header } from "../styles/fonts";
import GameRace from "../components/GameRace";
import styled from "@emotion/styled";
import { GameContext } from "../contexts/GameContext";
import idx from "idx";

const Container = styled.div({
  display: "flex",
  width: "100%",
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  paddingTop: 50,
  flexDirection: "column",
  "@media (min-width: 813px)": {
    paddingTop: 100
  }
});

const Header = styled.div({
  ...header,
  fontSize: 36
});
const GamePage = () => (
  <GameContext.Consumer>
    {({ data }) => {
      const betType = idx(data, _ => _.gameinfo.betType);
      const races = idx(data, _ => _.gamerace.races);
      const error = idx(data, _ => _.error);
      return (
        <Container>
          {error ? (
            <Header css={{ maxWidth: 400, textAlign: "center" }}>
              {error.response.data.error}
            </Header>
          ) : (
            <React.Fragment>
              <Header>{betType && betType}</Header>
              <div
                css={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  alignItems: "center"
                }}
              >
                {races &&
                  races.map(race => <GameRace key={race.id} race={race} />)}
              </div>
            </React.Fragment>
          )}
        </Container>
      );
    }}
  </GameContext.Consumer>
);
export default {
  component: GamePage
};
