import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Container,
} from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import requireAuth from '../components/hocs/requireAuth';
import { isEmptyObject } from '../helpers/validate';
import SideNavigator from '../components/sideNavigator';
import CvAboutMe from '../components/cv/cvAboutMe';

class CvPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  /**
   * component did mount
   */
  componentDidMount() {

  }


  render() {
    let { userData } = this.props;
    console.log('userData', userData);
    if (isEmptyObject(userData)) {
      return null;
    }
    return (
      <div className="cv_page_style">
        <SideNavigator />
        <Container>
          <CvAboutMe userData={userData} />
          {/*  <CvAboutMe />
              <CvHeader
                firstName={userData.firstName}
                lastName={userData.lastName} /> */}
          {/* <Row>
            <Col>...</Col>
            <Col>...</Col>
            <Col><CvContactInfo phone={userData.phone}
              email={userData.email} /></Col>
            <Col>...</Col>
          </Row>
          <Row>
            <Col xs="3">.col-3</Col>
            <Col xs="auto">.col-auto - variable width content</Col>
            <Col xs="3">.col-3</Col>
          </Row>
          <Row>
            <Col xs="6">.col-6</Col>
            <Col xs="6">.col-6</Col>
          </Row>
          <Row>
            <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
            <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
            <Col sm="4">.col-sm-4</Col>
          </Row>
          <Row>
            <Col sm={{ size: 6, order: 2, offset: 1 }}>.col-sm-6 .order-sm-2 .offset-sm-1</Col>
          </Row>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>.col-sm-12 .col-md-6 .offset-md-3</Col>
          </Row>
          <Row>
            <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
            <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
          </Row> */}
        </Container>
      </div >
    );
  }
}

function mapStateToProps({ userData }) {
  return {
    userData: userData.data
  };
}


function mapDispatchToProps(dispatch) {
  return ({
    // handleAddNewUser: bindActionCreators(registerNewUser, dispatch),
  });
}


export default {
  component: connect(mapStateToProps, mapDispatchToProps)(requireAuth(withRouter(CvPage)))
};
