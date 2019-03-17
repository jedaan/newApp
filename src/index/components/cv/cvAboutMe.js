import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Container } from 'reactstrap';

const CvAboutMe = ({ userData }) => (
    <Row>
        <Col md={6}>
            <div className="hello_style">
                <span>Hello I'm</span>
            </div>

            <h2>{userData.firstName} {userData.lastName}</h2>
            <h4>{userData.title}</h4>

            <ul>
                <li><i className="fa fa-envelope"></i><a href="mailto:">{userData.email}</a></li>
                <li ><i className="fa fa-phone"></i><a href="callto:">{userData.phone}</a></li>
                {/* <li ><i className="fa fa-map-marker"></i><address>37, Pollsatnd, New York, United State</address></li> */}
            </ul>

            <ul className="social-icon">
                <li><a><i className="fa fa-facebook"></i></a></li>
                <li><a><i className="fa fa-github"></i></a></li>
                <li><a><i className="fa fa-linkedin"></i></a></li>
            </ul>
        </Col>
        <Col md={5}>
            <div className="mh-about-inner">
                <h2 className="wow fadeInUp">About Me</h2>
                <p className="wow fadeInUp" >Hello, I’m a {userData.firstName}, web-developer based on {userData.country}.
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
);


CvAboutMe.propTypes = {

};

export default CvAboutMe;
