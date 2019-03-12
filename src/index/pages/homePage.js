import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class HomePage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="center-align" >
        <h3>This is a Welcome page</h3>
        <p>Check out these awesome features.</p>
        <button className="waves-effect waves-light btn">
          Press me!
        </button>
      </div>
    );
  }
}

export default {
  component: HomePage
};
