import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Progress,
  Col,
  Row,
} from 'reactstrap';
import moment from 'moment';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchRegistrationData, registerNewUser, checkEmail } from '../../data/actions/index';
import { MAIN_BACKGROUND_COLOR } from '../helpers/constant';
import PersonalData from '../components/register/personalData';
import EducationWorkData from '../components/register/educationWorkData';
import RegisterIndication from '../components/register/registerIndication';
import SkillsData from '../components/register/skillsData';

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPersonalData: true,
      showEducationData: false,
      showSkillsData: false,
      years: [],
      completion: 0,
      step: 0,
      personalData: {},
      educationData: [],
      workData: [],
      skillsData: [],
      languagesData: [],
      userExsist:false
    };
    this.handleSubmitPersonalData = this.handleSubmitPersonalData.bind(this);
    this.handleSubmitEducationWorkData = this.handleSubmitEducationWorkData.bind(this);
    this.handleSubmitRegister = this.handleSubmitRegister.bind(this);
    this.handleEducationWorkUpdate = this.handleEducationWorkUpdate.bind(this);
    this.handleSkillsUpdate = this.handleSkillsUpdate.bind(this);
    this.handleCheckUserExsist = this.handleCheckUserExsist.bind(this);
  }

  /**
   * component did mount
   */
  componentDidMount() {
    let years = [];
    for (let i = 1980; i <= moment().year(); i++) {
      years.push({ id: i, name: i });
    }
    this.setState({ years });
  }

  /**
   * submit personal data .
   * @param personalData
   */
  handleSubmitPersonalData(personalData) {
    this.setState({
      showPersonalData: false,
      showEducationData: true,
      step: 1,
      completion: 25,
      personalData
    });
  }

  /**
   * submit education and work data
   */
  handleSubmitEducationWorkData() {
    let { educationData, workData } = this.state;
    if (educationData && educationData.length > 0 &&
      workData && workData.length > 0) {
      this.setState({
        showSkillsData: true,
        showEducationData: false,
        step: 3,
        completion: 70,
      });
    }
  }


  handleEducationWorkUpdate(workData, educationData) {
    this.setState({ educationData, workData });
  }


  handleSkillsUpdate(languagesData, skillsData) {
    this.setState({ languagesData, skillsData });
  }

  handleSubmitRegister() {
    let logInFromRegister = true;
    let { email } = this.state.personalData;
    let { personalData, educationData, workData, skillsData, languagesData } = this.state;
    this.props.handleAddNewUser(personalData, educationData, workData, skillsData, languagesData);
    this.props.history.push('/login/' + email + '/' + logInFromRegister);
  }

  handleCheckUserExsist(email) {
    this.props.handleCheckEmail(email);
  }

  render() {
    let {
      personalData, educationData, step, workData, years, showPersonalData,
      showEducationData, showSkillsData, completion, skillsData, languagesData
    } = this.state;
    let { Countries, Degrees, Institution, Companies, Skill, Language } = this.props.registerData;
    let userExsist = this.props.dbValidate;
    return (
      <div className="register_page_container">
        <div className="text-center">{completion}%</div>
        <Progress value={this.state.completion} color={MAIN_BACKGROUND_COLOR} />
        <Row form>
          <Col>
            {showPersonalData && <PersonalData countries={Countries}
              years={years}
              userExsist={userExsist}
              onSubmit={this.handleSubmitPersonalData}
              onCheckUser={this.handleCheckUserExsist} />}

            {showEducationData &&
              <EducationWorkData degrees={Degrees}
                institution={Institution}
                years={years}
                companies={Companies}
                onAddNewEducation={this.handleAddNewEducation}
                onAddNewWork={this.handleAddNewWork}
                onSubmit={this.handleSubmitEducationWorkData}
                onEducationWorkUpdate={this.handleEducationWorkUpdate} />}

            {showSkillsData &&
              <SkillsData companies={Companies}
                years={years}
                skills={Skill}
                languages={Language}
                onAddNewSkill={this.handleAddNewSkill}
                onAddNewLanguage={this.handleAddNewLanguage}
                onSubmit={this.handleSubmitRegister}
                onSkillsUpdate={this.handleSkillsUpdate} />
            }
          </Col>

          <RegisterIndication step={step}
            personalData={personalData}
            educationData={educationData}
            workData={workData}
            skillsData={skillsData}
            languagesData={languagesData} />
        </Row>
      </div>
    );
  }
}

function mapStateToProps({ registerData, dbValidate }) {
  return {
    registerData,
    dbValidate
  };
}


function mapDispatchToProps(dispatch) {
  return ({
    handleAddNewUser: bindActionCreators(registerNewUser, dispatch),
    handleCheckEmail: bindActionCreators(checkEmail, dispatch),
  });
}


export default {
  loadData: ({ dispatch }) => dispatch(fetchRegistrationData()),
  component: connect(mapStateToProps, mapDispatchToProps)(withRouter(RegisterPage))
};
