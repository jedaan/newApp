import React, {Component} from "react"
import {Button, Col, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import InputHoc from '../comp/input';
import OptionHoc from '../comp/option';
import RegisterForm from "../hocs/registerForm";
import {isEmptyArray, validate} from "../../helpers/validate";
import {MAIN_BACKGROUND_COLOR} from "../../helpers/constant";

class SkillsData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skillsData: [],
      languagesData: [],
      showFinish: false,
      formData: {
        skill: '',
        skillContent: '',
        language: '',
        languageContent: ''
      },
      validData: {
        skill: false,
        language: false
      },
      disabledFinish: true
    };

    this.handleAddNewLanguage = this.handleAddNewLanguage.bind(this);
    this.handleAddNewSkill = this.handleAddNewSkill.bind(this);
    this.handleInputSave = this.handleInputSave.bind(this);
    this.handleAddNewSkill = this.handleAddNewSkill.bind(this);
    this.handleAddNewLanguage = this.handleAddNewLanguage.bind(this);
    this.handleSetValid = this.handleSetValid.bind(this);
    this.handleShowFinish = this.handleShowFinish.bind(this);

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

  handleAddNewSkill() {
    let {formData, validData} = this.state;
    if (validate(validData, 'skill')) {
      let data = {skill: formData.skill, skillContent: formData.skillContent};
      let skillsData = Object.assign([], this.state.skillsData);
      skillsData.push(data);
      this.setState({
        skillsData,
        formData: {
          skill: '',
          skillContent: ''
        },
        validData: {
          skill: false,
        },
      });
      this.handleShowFinish();
      this.props.onSkillsUpdate(this.state.languagesData, skillsData);
    } else {

    }
  }

  handleAddNewLanguage() {
    let {formData, validData} = this.state;
    if (validate(validData, 'language')) {
      let data = {language: formData.language, languageContent: formData.languageContent};
      let languagesData = Object.assign([], this.state.languagesData);
      languagesData.push(data);
      this.setState({
        languagesData,
        formData: {
          language: '',
          languageContent: ''
        },
        validData: {
          language: false,
        },
      });
      this.handleShowFinish();
      this.props.onSkillsUpdate(languagesData, this.state.skillsData);
    } else {

    }
  }

  handleShowFinish() {
    let {disabledFinish} = this.state;
    if (disabledFinish === true) {
      let self = this;
      setTimeout(function () {
        let {skillsData, languagesData} = self.state;
        if (!isEmptyArray(skillsData) && !isEmptyArray(languagesData)) {
          self.setState({disabledFinish: false});
        }
      }, 250);
    }
  }

  render() {
    let {formData, skillsData, languagesData,disabledFinish} = this.state;
    return (
      <div className="register_container">
        <h3>Work experience</h3>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <OptionHoc data={this.props.skills}
                         labelName={"Skill"}
                         type="select" name="skill"
                         id="skill"
                         value={formData.skill}
                         onValueChange={this.handleInputSave}
                         onSetValid={this.handleSetValid}/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Button active={true} color={MAIN_BACKGROUND_COLOR} className="add_education_button"
                      onClick={this.handleAddNewSkill}>Add</Button>
            </FormGroup>
          </Col>
        </Row>

        <Row form>
          <Col md={4}>
            <FormGroup>
              <OptionHoc data={this.props.languages}
                         labelName={"Language"}
                         type="select" name="language"
                         id="language"
                         value={formData.language}
                         onValueChange={this.handleInputSave}
                         onSetValid={this.handleSetValid}/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Button active={true} color={MAIN_BACKGROUND_COLOR} className="add_education_button"
                      onClick={this.handleAddNewLanguage}>Add</Button>
            </FormGroup>
          </Col>
        </Row>

        <Button active={true} color={MAIN_BACKGROUND_COLOR} className="finish_button_style"
                onClick={() => this.props.onSubmitAddForm(languagesData, skillsData)}
                disabled={disabledFinish}>Finish</Button>
      </div>);
  }
}

export default RegisterForm(SkillsData);
