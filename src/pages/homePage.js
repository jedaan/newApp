import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import {
  Col, Row,
  Container,
} from 'reactstrap';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  handleRegisterClick() {

  }

  render() {
    return (
      <div className="cv_page_style">
        <Container>
          <Row>
            <Col md={6}>
              <h2>You are a hi tech employee , create your digital Cv </h2>
              <h4>and improve your skills , to explore more new opportunities</h4>
              <h2> <a href="/register">start here .  </a> </h2>


            </Col>
            <Col md={5}>
              <div className="mh-about-inner">
                <h2 className="wow fadeInUp">About Me</h2>
                <p className="wow fadeInUp" >Hello, I’m a, web-developer based on
                I have rich experience in web site design & building
                     and customization. Also I am good at</p>
                <div className="about_me_style" >
                  <ul>
                    <li><span>php</span></li>
                    <li><span>html</span></li>
                    <li><span>css</span></li>
                    <li><span>php</span></li>
                    <li><span>wordpress</span></li>
                    <li><span>React</span></li>
                    <li><span>Javascript</span></li>
                  </ul>
                </div>
              </div>
            </Col>
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
          </Row>
        </Container>
      </div >
    );
  }
}

export default {
  component: HomePage
};
