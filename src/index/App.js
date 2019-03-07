import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/header';

const App = ({ route }) => (
  <div className="root">
    <Header />
    {renderRoutes(route.routes)}
  </div>
);

export default {
  component: App
}
