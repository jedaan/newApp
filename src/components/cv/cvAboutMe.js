import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Container } from 'reactstrap';

const CvAboutMe = ({ user, skills }) => (
    <Row>
        <Col md={6}>
            <div className="hello_style">
                <span>Hello I'm</span>
            </div>

            <h2>{user.firstName} {user.lastName}</h2>
            <h4>{user.title}</h4>

            <ul>
                <li><i className="fa fa-envelope"></i><a href="mailto:">{user.email}</a></li>
                <li ><i className="fa fa-phone"></i><a href="callto:">{user.phone}</a></li>
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
                <p className="wow fadeInUp" >Hello, I’m a {user.firstName}, web-developer based on {user.country}.
                I have rich experience in web site design & building
                     and customization. Also I am good at</p>
                <div className="about_me_style" >
                    <ul>
                        {
                            skills.map((item, index) =>
                                <li key={index}>
                                    <span>{item.skill}</span>
                                </li>)
                        }
                    </ul>
                </div>
            </div>
        </Col>
    </Row>
);


CvAboutMe.propTypes = {

};

export default CvAboutMe;
