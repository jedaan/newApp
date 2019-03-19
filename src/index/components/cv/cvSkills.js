import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Container } from 'reactstrap';
import CircularProgressbar from 'react-circular-progressbar';
const percentage = 66;

const CvSkills = () => (
    <Row className="section-separator">
        <Col md={6}>
            <div className="mh-skills-inner">
                <div className="tech_title">
                    <h3>Technical Skills</h3>
                    <div className="each-skills">
                        <div className="candidatos">
                            <div className="parcial">
                                <div className="info">
                                    <div className="nome">Javascript</div>
                                    <div className="percentagem-num">86%</div>
                                </div>
                                <div className="progressBar">
                                    <div className="percentagem" style={{ width: 86 + '%' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="candidatos">
                            <div className="parcial">
                                <div className="info">
                                    <div className="nome">Java</div>
                                    <div className="percentagem-num">46%</div>
                                </div>
                                <div className="progressBar">
                                    <div className="percentagem" style={{ width: 46 + '%' }} ></div>
                                </div>
                            </div>
                        </div>
                        <div className="candidatos">
                            <div className="parcial">
                                <div className="info">
                                    <div className="nome">Python</div>
                                    <div className="percentagem-num" >38%</div>
                                </div>
                                <div className="progressBar">
                                    <div className="percentagem" style={{ width: 38 + '%' }} ></div>
                                </div>
                            </div>
                        </div>
                        <div className="candidatos">
                            <div className="parcial">
                                <div className="info">
                                    <div className="nome">PHP</div>
                                    <div className="percentagem-num">17%</div>
                                </div>
                                <div className="progressBar">
                                    <div className="percentagem" style={{ width: 17 + '%' }} ></div>
                                </div>
                            </div>
                        </div>
                        <div className="candidatos">
                            <div className="parcial">
                                <div className="info">
                                    <div className="nome">PHP</div>
                                    <div className="percentagem-num">17%</div>
                                </div>
                                <div className="progressBar">
                                    <div className="percentagem" style={{ width: 17 + '%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
        <Col md={5}>
            <div className="professional_style">
                <h3>Professional Skills</h3>
                <ul>
                    <li>
                        <CircularProgressbar
                            percentage={percentage}
                            text={`${percentage}%`}
                        />
                        <div className="pr-skill-name">Communication</div>
                    </li>
                    <li>
                        <CircularProgressbar
                            percentage={percentage}
                            text={`${percentage}%`}
                        />
                        <div className="pr-skill-name">Team Work</div>
                    </li>
                    <li>
                        <CircularProgressbar
                            percentage={percentage}
                            text={`${percentage}%`}
                        />
                        <div className="pr-skill-name">Project Management</div>
                    </li>
                    <li>
                        <CircularProgressbar
                            percentage={percentage}
                            text={`${percentage}%`}
                        />
                        <div className="pr-skill-name">Creativity</div>
                    </li>
                </ul>
            </div>
        </Col>
    </Row >
);


CvSkills.propTypes = {

};

export default CvSkills;
