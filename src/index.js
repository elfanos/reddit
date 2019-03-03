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

function handleRedirect(req, res) {
  res.set("Cache-Control", "public, max-age=0");
  if (req.originalUrl === "/") {
    res.redirect("/V75");
  }
}

app.use(atgendpoints);
app.use(express.static("public"));

//redirect to correct index
app.get("/", (req, res) => {
  res.redirect("/V75");
});

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

    if (context.notFound) {
      res.status(404);
    }
    res.send(content);
  });
});

app.listen(3000, () => {
  console.log("listen on port 3000");
});
