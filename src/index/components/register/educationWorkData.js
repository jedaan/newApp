import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {MAIN_BACKGROUND_COLOR} from '../../helpers/constant';
import RegisterForm from '../hocs/registerForm';
import {
  Button,
  Form,
} from 'reactstrap';
import EducationComponent from './educationFields';
import WorkExperienceComponent from "./experienceFields";

class EducationWorkData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      educationData: [],
      workData: [],
    };
    this.handleAddNewWork = this.handleAddNewWork.bind(this);
    this.handleAddNewEducation = this.handleAddNewEducation.bind(this);
    this.handleUpdateRegisterIndication = this.handleUpdateRegisterIndication.bind(this);
  }

  /**
   * add new education .
   * @param data
   */
  handleAddNewEducation(data) {
    let educationData = Object.assign([], this.state.educationData);
    educationData.push(data);
    this.setState({educationData});
    this.handleUpdateRegisterIndication(this.state.workData, educationData);

  }

  /**
   * add new work experience .
   * @param data
   */
  handleAddNewWork(data) {
    let workData = Object.assign([], this.state.workData);
    workData.push(data);
    this.setState({workData});
    this.handleUpdateRegisterIndication(workData, this.state.educationData);
  }

  handleUpdateRegisterIndication(workData, educationData) {
    this.props.onEducationWorkUpdate(workData, educationData);
  }

  render() {
    let active = true;
    let {years, degrees, institution, companies} = this.props;
    let {workData, educationData} = this.state;
    return (
      <Form className="register_container">
        <EducationComponent
          years={years}
          degrees={degrees}
          institutions={institution}
          onAddNewEducation={this.handleAddNewEducation}
        />

        <WorkExperienceComponent
          years={years}
          companies={companies}
          onAddNewWork={this.handleAddNewWork}/>


        <Button active={active} color={MAIN_BACKGROUND_COLOR} className="button_style"
                onClick={() => this.props.onSubmitAddForm(workData, educationData)}>Next</Button>
      </Form>
    );
  }
}


EducationWorkData.propTypes = {};

export default RegisterForm(EducationWorkData);
