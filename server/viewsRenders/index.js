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
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="description" content="Maha Personal cv/resume template for professional and personal website." />
        <meta name="keywords" content="creative, cv, designer,  online cv, online resume, professional resume, responsive, resume, vcard " />
        <meta name="developer" content="Md. Siful Islam">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="assets/plugins/css/bootstrap.min.css">

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
