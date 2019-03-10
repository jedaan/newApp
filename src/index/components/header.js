import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { MAIN_BACKGROUND_COLOR, MAIN_FORECOLOR } from '../helpers/constant';
import { logOut } from '../../data/actions/index';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    let { authenticated } = this.props;
    return (
      <div >
        <Navbar expand="md">
          <img src="../../../assets/images/logo.png" width="50px" height="50px"></img>
          <NavbarToggler onClick={this.toggle} className="toggle" />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Main</NavLink>
              </NavItem>
              {authenticated ?
                <NavItem>
                  <NavLink href="#" onClick={this.props.handleLogOut}>Logout</NavLink>
                </NavItem> :
                <NavItem>
                  <NavLink href="/login">Login</NavLink>
                </NavItem>
              }
              {!authenticated &&
                <NavItem>
                  <NavLink href="/register">Register</NavLink>
                </NavItem>}

            </Nav>
          </Collapse>
        </Navbar>
      </div>);
  }
}

function mapStateToProps({ userData }) {
  return { authenticated: userData.authenticated };
}


function mapDispatchToProps(dispatch) {
  return ({
    handleLogOut: bindActionCreators(logOut, dispatch),
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)