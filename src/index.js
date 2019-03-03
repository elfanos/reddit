import "@babel/polyfill";
import express from "express";
import renderer from "./helpers/renderer";
import { matchRoutes } from "react-router-config";
import proxy from "express-http-proxy";
import Routes from "./client/Routes";
import cors from "cors";
import atgendpoints from "./controllers/atgendpoints";
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(atgendpoints);
app.use(express.static("public"));

app.get("*", (req, res) => {
  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => (route.loadData ? route.loadData() : null))
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });
  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, context);

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
