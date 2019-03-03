import express from "express";
const request = require("request");

const router = express.Router();
router.get("/atg/bettype/:betypeId", (req, res) => {
  console.log(
    `api: /services/racinginfo/v1/api/products/${req.params.betypeId}`
  );
  request(
    `http://www.atg.se/services/racinginfo/v1/api/products/${
      req.params.betypeId
    }`,
    function(error, response, body) {
      if (!error && response.statusCode == 200) {
        res.status(200);
        res.json(JSON.parse(body));
      } else {
        res.status(302).send({ error: "something went wrong with the api" });
      }
    }
  );
});
router.get("/atg/games/:gameId", (req, res) => {
  console.log(`api: /services/racinginfo/v1/api/games/${req.params.gameId}`);
  request(
    `https://www.atg.se/services/racinginfo/v1/api/games/${req.params.gameId}`,
    function(error, response, body) {
      if (!error && response.statusCode == 200) {
        res.status(200);
        res.json(JSON.parse(body));
      } else {
        res.status(302).send({ error: "something went wrong with the api" });
      }
    }
  );
});
export default router;
