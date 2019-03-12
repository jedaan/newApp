import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/header';
import Loader from './components/loader';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loader: true
    };
    this.handleChangeLoader = this.handleChangeLoader.bind(this);
    setTimeout(() => {
      this.handleChangeLoader();
    }, 200);
  }

  handleChangeLoader() {
    this.setState({ loader: false });
  }

  render() {
    let { loader } = this.state;
    let { route } = this.props;
    let path = this.props.location.pathname;
    if (loader === true && path === '/') {
      return <Loader />;
    } else {
      return (
        <div>
          <Header />
          {renderRoutes(route.routes)}
        </div>);
    }
  }
}

export default {component: App};
