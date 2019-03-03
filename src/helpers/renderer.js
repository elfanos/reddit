/**
 * Created by Rasmus on 2018-07-03.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Routes from "../client/Routes";
import { renderRoutes } from "react-router-config";
import serialize from "serialize-javascript";
import { Helmet } from "react-helmet";
import normalize from "../client/styles/normalize.css";
import GameContextProvider from "../client/contexts/GameContext";
import { whiteBackground } from "../client/styles/colors";

export default (req, staticContext) => {
  const content = renderToString(
    <GameContextProvider pathname={req.path}>
      <StaticRouter location={req.path} context={staticContext}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </GameContextProvider>
  );

  const helmet = Helmet.renderStatic();
  return `
        <html>
            <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                <style>
                  ${normalize}
                  html{
                    background: ${whiteBackground};
                    font-family: 'Helvetica Neue';
                    overflow-x:hidden;

                  }
                </style>
                <meta name="viewport" content="width=device-width, initial-scale=1">
            </head>
            <body>
                <div id="root">${content}</div>

                <script src="bundle.js"></script>
            </body>
        </html>
    `;
};
