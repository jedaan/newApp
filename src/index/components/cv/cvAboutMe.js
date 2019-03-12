import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Container } from 'reactstrap';

const CvAboutMe = (props) => (
    <Row>
        <Col>
            <div className="mh-header-info">
                <div className="mh-promo wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">
                    <span>Hello I'm</span>
                </div>

                <h2 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">Alex Johnson</h2>
                <h4 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">Product Designer</h4>

                <ul>
                    <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s"><i className="fa fa-envelope"></i><a href="mailto:">getemail@email.com</a></li>
                    <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s"><i className="fa fa-phone"></i><a href="callto:">+12 986 987 7867</a></li>
                    <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.6s"><i className="fa fa-map-marker"></i><address>37, Pollsatnd, New York, United State</address></li>
                </ul>

                <ul className="social-icon wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.7s">
                    <li><a href=""><i className="fa fa-facebook"></i></a></li>
                    <li><a href=""><i className="fa fa-twitter"></i></a></li>
                    <li><a href=""><i className="fa fa-github"></i></a></li>
                    <li><a href=""><i className="fa fa-dribbble"></i></a></li>
                </ul>
            </div>
        </Col>
        <Col>
            <div className="mh-about-inner">
                <h2 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">About Me</h2>
                <p className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">Hello, I’m a Patrick, web-developer based on Paris.
                I have rich experience in web site design & building
                     and customization. Also I am good at</p>
                <div className="mh-about-tag wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
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
                <a href="" className="btn btn-fill wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">Downlaod CV <i className="fa fa-download"></i></a>
            </div>
        </Col>
    </Row>
);


CvAboutMe.propTypes = {

};

export default CvAboutMe;
