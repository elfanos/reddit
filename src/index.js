import "babel-polyfill";
import express from "express";
import renderer from "./helpers/renderer";
import { matchRoutes } from "react-router-config";
import proxy from "express-http-proxy";
import Routes from "./client/Routes";
import createStore from "./helpers/createStore";
import cors from "cors";
const request = require("request");
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(
  "/api",
  proxy("http://www.atg.se", {
    proxyReqOptDecorator(opts) {
      console.log(opts);
      opts.headers["Access-Control-Allow-Origin"] = "*";
      opts.headers["x-forward-host"] = "localhost:3000";
      return opts;
    }
  })
);

const router = express.Router();

router.get("/atg", (req: $Request, res: $Response) => {
  request(
    "https://www.atg.se/services/racinginfo/v1/api/products/V75",
    function(error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body); // Print the google web page.
        res.json(JSON.parse(body));
      }
    }
  );
});

// app.use(cors(corsOptions));
app.use(router);
app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore(req);

  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => (route.loadData ? route.loadData(store) : null))
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });
  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    console.log(context);

    if (context.url) {
      /* Set a cache controller so that chrome wont
             * cache the redirect and create a infinity loop
             * when user logout*/
      // res.set("Cache-Control", "public, max-age=0");
      return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }
    res.send(content);
  });
});

app.listen(3000, () => {
  console.log("listen on port 3000");
});
