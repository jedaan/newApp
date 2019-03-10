import React, { Component } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

export default ComposedComponent => {
  class RequireAuth extends Component {
    render() {
      const { authenticated } = this.props;

      switch (authenticated) {
        case false:
        case null || undefined:
          return <Redirect to="/login" />;

        default:
          return <ComposedComponent {...this.props} />
      }
    }
  }

  function mapStateToProps({ userData }) {
    return { authenticated: userData.authenticated };
  }
  return connect(mapStateToProps)(RequireAuth)
}
