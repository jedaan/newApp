import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import LogIn from '../components/register/logIn';
import { isEmptyObject } from "../helpers/validate";
import { firstLogIn, logIn } from "../data/actions/index";

class LogInPage extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      logInFromRegister: false
    };
    this.handleLogIn = this.handleLogIn.bind(this);
  }


  componentDidMount() {
    let { match: { params } } = this.props;
    if (!isEmptyObject(params)) {
      let { email, logInFromRegister } = params;
      logInFromRegister = (logInFromRegister === "true") ? true : false;
      this.setState({ email, logInFromRegister });
    }
  }


  componentWillUpdate(nextProps) {
    if (nextProps.authenticated) {
      this.props.history.push("/cvpage");
    }
  }

  handleLogIn(email, password, logInFromRegister) {
    if (logInFromRegister === true) {
      this.props.handleFirstLogIn(email, password);
    } else {
      this.props.handleLogIn(email, password);
    }
  }

  render() {
    let { email, logInFromRegister } = this.state;
    return (
      <div className="login_page_style">
        <LogIn email={email}
          logInFromRegister={logInFromRegister}
          onSubmit={this.handleLogIn} />
      </div>
    );
  }
}


function mapStateToProps({ userData }) {
  return { authenticated: userData.authenticated };
}

function mapDispatchToProps(dispatch) {
  return ({
    handleFirstLogIn: bindActionCreators(firstLogIn, dispatch),
    handleLogIn: bindActionCreators(logIn, dispatch)
  });
}

export default {
  component: connect(mapStateToProps, mapDispatchToProps)(withRouter(LogInPage))
};
