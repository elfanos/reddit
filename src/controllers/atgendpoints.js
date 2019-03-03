import express from "express";
const request = require("request");

const router = express.Router();
router.get("/atg/bettype/:betypeId", (req, res) => {
  request(
    `http://www.atg.se/services/racinginfo/v1/api/products/${
      req.params.betypeId
    }`,
    function(error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(JSON.parse(body));
      }
    }
  );
});
router.get("/atg/games/:gameId", (req, res) => {
  request(
    `https://www.atg.se/services/racinginfo/v1/api/games/${req.params.gameId}`,
    function(error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(JSON.parse(body));
      }
    }
  );
});
export default router;
