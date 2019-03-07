import React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { renderRoutes } from "react-router-config"
import serialize from "serialize-javascript"
import { Helmet } from "react-helmet"
import Routes from '../../src/Routes';

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        {renderRoutes(Routes)}
      </StaticRouter>
    </Provider>
  );

  const helmet = Helmet.renderStatic();

  return `
      <html>
        <head>
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          <link  rel="stylesheet" href="../styles/index.css">
        </head>
        <body>
          <div id="root">${content}</div>
        </body>
         
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script type="text/javascript" src="../scripts/index-bundle.js"></script>
      </html>
    `
}
