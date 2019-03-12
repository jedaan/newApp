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
        firstName: 'jedaan',
        lastName: 'shammas ',
        country: '1',
        countryContent: '',
        city: '1',
        cityContent: 'Israel',
        phone: '0524',
        email: 'j@j.com',
        yearOfBirth: '1987',
        yearOfBirthContent: '',
        gender: ''
      },
      validData: {
        firstName: true,
        lastName: true,
        country: true,
        city: true,
        phone: true,
        email: true,
        yearOfBirth: true,
        gender: false
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
    console.log('aaaaa - ', userExsist);
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
              value={formData.country}
              type="select" name="country"
              id="country"
              onValueChange={this.handleInputSave}
              onSetValid={this.handleSetValid} />

          </Col>
          <Col md={6}>
            <OptionHoc data={countries}
              labelName={"City"}
              value={formData.city}
              type="select" name="city"
              id="city"
              onValueChange={this.handleInputSave}
              onSetValid={this.handleSetValid} />

          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <OptionHoc data={this.props.years}
              labelName={"Year of birth"}
              type="select"
              value={formData.yearOfBirth}
              name="yearOfBirth"
              id="yearOfBirth"
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
