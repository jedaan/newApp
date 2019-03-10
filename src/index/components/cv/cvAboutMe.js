import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';

const CvAboutMe = (props) => (
    <Row>
        <Col md={6}>
            <div className="mh-header-info">
                <div className="about_me_style" >
                    <span>Hello I'm</span>
                </div>

                <h2 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">Alex Johnson</h2>
                <h4 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s" >Product Designer</h4>

                <ul>
                    <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s"><a href="mailto:">getemail@email.com</a></li>
                    <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s" ><i className="fa fa-phone"></i><a href="callto:">+12 986 987 7867</a></li>
                    <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.6s" ><i className="fa fa-map-marker"></i><address>37, Pollsatnd, New York, United State</address></li>
                </ul>

                <ul className="social-icon wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.7s" >
                    <li><a href=""><i className="fa fa-facebook"></i></a></li>
                    <li><a href=""><i className="fa fa-twitter"></i></a></li>
                    <li><a href=""><i className="fa fa-github"></i></a></li>
                    <li><a href=""><i className="fa fa-dribbble"></i></a></li>
                </ul>
            </div>
        </Col>
        <Col md={6}>
            <div className="hero-img wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.6s" >
                <div className="img-border">
                    <img src="assets/images/hero.png" alt="" className="img-fluid" />
                </div>
            </div>
        </Col>
    </Row>
);


CvAboutMe.propTypes = {

};

export default CvAboutMe;
