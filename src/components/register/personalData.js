import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MAIN_BACKGROUND_COLOR } from '../../helpers/constant';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import RegisterForm from '../hocs/registerForm';
import InputHoc from '../comp/input';
import OptionHoc from '../comp/option';
import { isEmptyObject } from '../../helpers/validate';

class PersonalData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        firstName: '',
        lastName: '',
        countryId: '',
        countryContent: '',
        cityId: '',
        cityContent: '',
        phone: '',
        email: '',
        birthYear: '',
        yearOfBirthContent: '',
        gender: ''
      },
      validData: {
        firstName: true,
        lastName: true,
        countryId: true,
        cityId: true,
        phone: true,
        email: true,
        birthYear: true,
        gender: true
      },
    };
    this.genderChange = this.genderChange.bind(this);
    this.handleInputSave = this.handleInputSave.bind(this);
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
    if (name === 'email') {
      this.props.onCheckUser(this.state.formData.email);
    }
  }

  genderChange(value) {
    if (value.id === 'male' && value.checked === true) {
      this.handleInputSave('gender', 'male');
    }
    else if (value.id === 'female' && value.checked === true) {
      this.handleInputSave('gender', 'female');
    }
    this.handleSetValid('gender', true);
  }

  render() {
    let active = true;
    let { formData, validData } = this.state;
    let { countries, userExsist } = this.props;
    userExsist = isEmptyObject(userExsist) ? false : userExsist;
    return (
      <div className="register_container">
        <h3>Personal data</h3>
        <Row>
          <Col md={6}>
            <InputHoc labelName={"First Name"}
              type="text"
              value={formData.firstName}
              name="firstName"
              id="firstName"
              onValueChange={this.handleInputSave}
              onSetValid={this.handleSetValid} />
          </Col>
          <Col md={6}>
            <InputHoc labelName={"Last Name"}
              type="text"
              value={formData.lastName}
              name="lastName"
              id="lastName"
              onValueChange={this.handleInputSave}
              onSetValid={this.handleSetValid} />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <InputHoc labelName={"Email"}
              type="email"
              value={formData.email}
              name="email"
              id="email"
              onValueChange={this.handleInputSave}
              onSetValid={this.handleSetValid} />
          </Col>
          <Col md={6}>
            <InputHoc labelName={"Phone"}
              type="phone"
              value={formData.phone}
              name="phone"
              id="phone"
              onValueChange={this.handleInputSave}
              onSetValid={this.handleSetValid} />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <OptionHoc data={countries}
              labelName={"Country"}
              value={formData.countryId}
              type="select" name="countryId"
              id="countryId"
              onValueChange={this.handleInputSave}
              onSetValid={this.handleSetValid} />

          </Col>
          <Col md={6}>
            <OptionHoc data={countries}
              labelName={"City"}
              value={formData.cityId}
              type="select" name="cityId"
              id="cityId"
              onValueChange={this.handleInputSave}
              onSetValid={this.handleSetValid} />

          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <InputHoc labelName={"Year of birth"}
              value={formData.birthYear}
              name="birthYear"
              id="birthYear"
              onValueChange={this.handleInputSave}
              onSetValid={this.handleSetValid} />
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <Label>Gender</Label>
            <FormGroup check>
              <Label check>
                <Input type="radio"
                  name="radio1"
                  id="male"
                  onChange={(e) => this.genderChange(e.target)}
                  checked={formData.male} />{' '}
                Male
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio"
                  name="radio1"
                  id="female"
                  onChange={(e) => this.genderChange(e.target)}
                  checked={formData.female} />{' '}
                Female
              </Label>
            </FormGroup>
          </Col>
        </Row>
        <Button active={active} color={MAIN_BACKGROUND_COLOR} className="button_style"
          onClick={() => this.props.onSubmitForm(formData, validData)} disabled={userExsist}>Next</Button>
      </div>
    );
  }
}

export default RegisterForm(PersonalData);
