import React from 'react';
import { Helmet } from 'react-helmet';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;

  const head = () => (
    <Helmet>
      <title>Page Not Found</title>
      <meta property="og:title" content="Page Not Found" />
    </Helmet>
  );

  return (
    <div>
      {head()}
      <h3 className="center-align">Oops! Route not found!!</h3>
    </div>
  );
};

export default {
  component: NotFoundPage
};
