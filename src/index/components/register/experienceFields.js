import React from 'react';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import InputHoc from '../comp/input';
import OptionHoc from '../comp/option';
import { MAIN_BACKGROUND_COLOR } from '../../helpers/constant';
import { validate } from '../../helpers/validate';
import RegisterForm from '../hocs/registerForm';

const END_DATE_NAME = "endDate";
const CURRENT_WORK = "currentWork";

class ExperienceFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWork: false,
      formData: {
        company: '', role: '', currentWork: false, startDate: '', endDate: '',
        companyContent: ''
      },
      validData: {
        company: false, role: false, currentWork: false, startDate: false, endDate: false
      },
    };
    this.handleInputSave = this.handleInputSave.bind(this);
    this.handleAddNewWork = this.handleAddNewWork.bind(this);
    this.handleSetValid = this.handleSetValid.bind(this);
    this.handleCurrentWork = this.handleCurrentWork.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
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

  handleAddNewWork() {
    let doNotValidate = '';
    if (!this.state.currentWork) {
      doNotValidate = CURRENT_WORK;
    }
    if (validate(this.state.validData, '', doNotValidate)) {
      this.props.onAddNewWork(this.state.formData);
      this.setState({
        currentWork: false,
        formData: {
          company: '', role: '', currentWork: false, startDate: '', endDate: '', companyContent: ''
        },
        validData: {
          company: false, role: false, currentWork: false, startDate: false, endDate: false
        },
      });
    } else {
      // Todo
    }
  }

  handleCurrentWork(target) {
    let checked = target.checked;
    this.setState({ currentWork: checked });
    let formData = Object.assign({}, this.state.formData);
    formData[target.name] = checked;
    this.setState({ formData });
    if (checked === true) {
      let me = this;
      setTimeout(function () {
        me.handleSetValid(END_DATE_NAME, true);
      }, 250);
    }
    this.handleSetValid(target.name, true);
  }

  handleChangeDate(target) {
    let formData = Object.assign({}, this.state.formData);
    formData[target.name] = target.value;
    this.handleSetValid(target.name, true);
    this.setState({ formData });
    if (target.name === END_DATE_NAME) {
      let me = this;
      setTimeout(function () {
        me.handleSetValid(END_DATE_NAME, true);
      }, 250);
    }
  }

  render() {
    let active = true;
    let { formData, currentWork } = this.state;
    return (
      <div className="work_experience">
        <h3>Work experience</h3>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <OptionHoc data={this.props.companies}
                labelName={"Company"}
                type="select" name="company"
                id="company"
                value={formData.company}
                onValueChange={this.handleInputSave}
                onSetValid={this.handleSetValid} />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <InputHoc labelName={"Role"}
                type="text"
                name="role"
                id="role"
                value={formData.role}
                onValueChange={this.handleInputSave}
                onSetValid={this.handleSetValid} />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup row>
              <Col sm={{ size: 20 }}>
                <FormGroup check className="register_checkbox">
                  <Label check>
                    <Input type="checkbox" id={CURRENT_WORK} name={CURRENT_WORK}
                      onChange={(e) => this.handleCurrentWork(e.target)} />{' '}
                    Current work
                  </Label>
                </FormGroup>
              </Col>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <FormGroup>
              <Label for="Start">Start</Label>
              <Input
                type="date"
                name="startDate"
                id="startDate"
                placeholder="Start"
                onChange={(e) => this.handleChangeDate(e.target)}
              />
            </FormGroup>
          </Col>
          {(!currentWork) &&
            <Col md={4}>
              <FormGroup>
                <Label for="End">End</Label>
                <Input
                  type="date"
                  name={END_DATE_NAME}
                  id={END_DATE_NAME}
                  placeholder="End"
                  onChange={(e) => this.handleChangeDate(e.target)}
                />
              </FormGroup>
            </Col>}
          <Col md={2}>
            <FormGroup>
              <Button active={active} color={MAIN_BACKGROUND_COLOR} className="add_education_button"
                onClick={this.handleAddNewWork}>Add</Button>
            </FormGroup>
          </Col>
        </Row>
      </div>);
  }
}


export default RegisterForm(ExperienceFields);
