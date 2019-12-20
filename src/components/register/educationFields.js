import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import RegisterForm from '../hocs/registerForm';
import OptionHoc from '../comp/option';
import InputHoc from '../comp/input';
import { MAIN_BACKGROUND_COLOR } from '../../helpers/constant';
import { validate } from '../../helpers/validate';

class EducationFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        graduateYear: '', institutionId: '', degreeId: '',
        institutionContent: '', degreeContent: ''
      },
      validData: {
        institutionId: false, degreeId: false, graduateYear: false
      },
    };
    this.handleInputSave = this.handleInputSave.bind(this);
    this.handleAddNewEducation = this.handleAddNewEducation.bind(this);
    this.handleSetValid = this.handleSetValid.bind(this);
  }

  handleInputSave(name, value, content) {
    this.setState((prevState) => ({
      formData: this.props.onInputSave(prevState.formData, name, value, content)
    }));
  }


  handleSetValid(name, value) {
    this.setState((prevState) => ({
      validData: this.props.onSetValid(prevState.validData, name, value)
    }));
  }

  handleAddNewEducation() {
    if (validate(this.state.validData)) {
      this.props.onAddNewEducation(this.state.formData);
      this.setState({
        formData: {
          graduateYear: '', institutionId: '', degreeId: ''
        },
        validData: {
          institutionId: false, graduateYear: false, degreeId: false
        },
      });
    } else {
      //ToDo --
    }
  }

  render() {
    let active = true;
    let { formData } = this.state;
    let { institutions, degrees } = this.props;
    return (
      <div>
        <h3>Education</h3>
        <Row form>
          <Col md={3}>
            <FormGroup>
              <OptionHoc data={institutions}
                labelName={"Institution"}
                type="select"
                name="institutionId"
                id="institutionId"
                value={formData.institutionId}
                onValueChange={this.handleInputSave}
                onSetValid={this.handleSetValid} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <OptionHoc data={degrees}
                labelName={"Degree"}
                type="select" name="degreeId"
                id="degreeId"
                value={formData.degreeId}
                onValueChange={this.handleInputSave}
                onSetValid={this.handleSetValid} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <InputHoc labelName={"Graduate Year"}
                name="graduateYear"
                id="graduateYear"
                value={formData.graduateYear}
                onValueChange={this.handleInputSave}
                onSetValid={this.handleSetValid} />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Button active={active} color={MAIN_BACKGROUND_COLOR} className="add_education_button"
                onClick={this.handleAddNewEducation}>Add</Button>
            </FormGroup>
          </Col>
        </Row>
      </div>
    );
  }
}

EducationFields.propTypes = {};


export default RegisterForm(EducationFields);
