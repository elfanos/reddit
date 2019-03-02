// @flow
import * as React from "react";
// import { Formik } from "formik";
import { blackBackground } from "../styles/colors";
// import styled from "react-emotion";
import styled from "@emotion/styled";
import { GameContext } from "../contexts/GameContext";

const Container = styled.div({
  color: "red",
  backgroundColor: blackBackground,
  display: "flex",
  width: "100%",
  flex: 1
});

const GamePage = () => {
  console.log("rendering");
  let mounted = false;
  const [gameTypes, setGameTypes] = React.useState([]);
  const getGameType = () => console.log("yoo");

  React.useEffect(() => {
    mounted = true;
    return () => {
      mounted = false;
    };
  }, []);
  const callApi = (id: *) => console.log("id", id);
  const checkGameType = (id: *) => {
    console.log(gameTypes, mounted);
    if (mounted) {
      console.log("wow", id.target.name, mounted);
      if (gameTypes.includes(id.target.name)) {
        return setGameTypes(
          gameTypes.filter(gameType => gameType !== id.target.name)
        );
      }
      return setGameTypes([...gameTypes, id.target.name]);
    }
  };
  return (
    <GameContext.Consumer>
      {({ selectedGameType }) => (
        <Container>
          hola
          <input
            type="checkbox"
            name="V75"
            onChange={e => selectedGameType(e)}
          />
          <input
            type="checkbox"
            name="V4"
            onChange={e => selectedGameType(e)}
          />
          <input
            type="checkbox"
            name="V64"
            onChange={e => selectedGameType(e)}
          />
          <input
            type="checkbox"
            name="V65"
            onChange={e => selectedGameType(e)}
          />
        </Container>
      )}
    </GameContext.Consumer>
  );
};
export default {
  component: GamePage
};
