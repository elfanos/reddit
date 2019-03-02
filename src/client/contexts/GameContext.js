// @flow
import * as React from "react";
import axios from "axios";
// import fetch from "whatwg-fetch";
// import { getGameType } from "../api";

// class GameInfo {
//   status: string;
//   id: string;
//   startTime: string;
// }
//
// export class RaceStart {
//   number: string;
//   driver: {
//     firsName: string,
//     lastName: string
//   };
//   horse: {
//     name: string,
//     trainer: {
//       firstName: string,
//       lastName: string
//     },
//     pedigree: {
//       father: {
//         name: string
//       }
//     }
//   };
// }
// export class GameRace {
//   date: string;
//   name: string;
//   scheduledStartTime: string;
//   starts: Array<RaceStart>;
// }

export const GET_GAMETYPE = "GET_GAMETYPE";
export const GAMEINFO_ACTIVE = "GAMEINFO_ACTIVE";
export const GAMEINFO_INACTIVE = "GAMEINFO_INACTIVE";

const ATG_API_CONTANTS = {
  gameType: (type: string) =>
    "https://www.atg.se/services/racinginfo/v1/api/products/" + type,
  games: (id: string) =>
    "https://www.atg.se/services/racinginfo/v1/api/games/" + id // look like this "V75_2018-05-12_6_5"
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case GET_GAMETYPE:
      return {
        ...state,
        gameinfo: Object.assign(new GameInfo(), action.gameinfo)
      };

    default: {
      return state;
    }
  }
};

export const GameContext = React.createContext({
  selectedGameType: (id: *) => {},
  data: {}
});

const GameContextProvider = ({ children }: *) => {
  const [state, dispatch] = React.useReducer(gameReducer, {
    gameinfo: null
  });
  const selectedGameType = async (e: *) => {
    console.log("hola", e, dispatch);
    const res = await axios
      .get("atg")
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  return (
    <GameContext.Provider value={{ selectedGameType, data: state }}>
      {children}
    </GameContext.Provider>
  );
};
export default GameContextProvider;
