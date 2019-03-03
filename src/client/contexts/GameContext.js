// @flow
import * as React from "react";
import axios from "axios";
import idx from "idx";
import { compareDesc, parse } from "date-fns";

type GameInfo = {
  status: string,
  id: string,
  startTime: string
};

type GameType = {
  gameType: string,
  upcoming: Array<GameInfo>,
  results: Array<GameInfo>
};

type RaceStart = {
  number: string,
  driver: {
    firsName: string,
    lastName: string
  },
  horse: {
    name: string,
    trainer: {
      firstName: string,
      lastName: string
    },
    pedigree: {
      father: {
        name: string
      }
    }
  }
};
type GameRace = {
  date: string,
  name: string,
  scheduledStartTime: string,
  starts: Array<RaceStart>
};

export const GET_GAMETYPE = "GET_GAMETYPE";
export const GET_GAMERACE = "GET_GAMERACE";
export const GAMEINFO_ACTIVE = "GAMEINFO_ACTIVE";
export const GAMEINFO_INACTIVE = "GAMEINFO_INACTIVE";
export const GET_ERROR = "GET_ERROR";

const gameTypeReducer = (
  state: *,
  action: {
    type: string,
    gameinfo?: *,
    gamerace?: *,
    error?: *
  }
) => {
  switch (action.type) {
    case GET_GAMETYPE:
      return {
        ...state,
        gameinfo: action.gameinfo
      };
    case GET_GAMERACE:
      return {
        ...state,

        gamerace: action.gamerace
      };
    case GET_ERROR:
      return {
        ...state,
        error: action.error
      };
    default: {
      return state;
    }
  }
};
export const GameContext = React.createContext<*>({
  selectedGameType: (id: *) => {},
  betTypes: [],
  data: {
    gamerace: {
      races: []
    },
    gameinfo: { betType: [] }
  }
});
const getLatestRace = (gameRaces: Array<*>) =>
  gameRaces.sort((a, b) =>
    compareDesc(parse(a.startTime), parse(b.startTime))
  )[0];

const GameContextProvider = ({ children, pathname }: *) => {
  const [state, dispatch] = React.useReducer(gameTypeReducer, {
    gameinfo: null,
    gamerace: null
  });
  const selectedGameType = async (betType: string) => {
    return await axios
      .get(`atg/bettype/${betType}`)
      .then(res => dispatch({ type: GET_GAMETYPE, gameinfo: res.data }))
      .catch(error => dispatch({ type: GET_ERROR, error: error }));
  };
  const getGameRace = async (gameId: string) => {
    return await axios
      .get(`atg/games/${gameId}`)
      .then(res => dispatch({ type: GET_GAMERACE, gamerace: res.data }))
      .catch(error => dispatch({ type: GET_ERROR, error: error }));
  };
  React.useEffect(
    () => {
      if (pathname) {
        selectedGameType(pathname.replace(/\//g, "").toUpperCase());
      }
      //null the reducer here maybe
      return () => undefined;
    },
    [pathname]
  );
  React.useEffect(
    () => {
      //check if there is uppcoming otherwise get the lates result game
      const upcoming = idx(state, _ => _.gameinfo.upcoming);
      const results = idx(state, _ => _.gameinfo.results);

      if (upcoming) {
        const latestRace = getLatestRace(upcoming);
        latestRace && latestRace.id && getGameRace(latestRace.id);
      } else if (results) {
        const latestRace = getLatestRace(results);
        latestRace && latestRace.id && getGameRace(latestRace.id);
      }
      return () => undefined;
    },
    [state.gameinfo]
  );
  return (
    <GameContext.Provider
      value={{
        selectedGameType,
        betTypes: ["V75", "V65", "V64", "V4"],
        data: state
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
export default GameContextProvider;
