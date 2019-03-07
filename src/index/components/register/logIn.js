import React, {Component} from "react"
import {
  Form,
  FormGroup,
  Col,
  Button,
} from 'reactstrap';
import InputHoc from '../comp/input';
import RegisterForm from "../hocs/registerForm";
import {MAIN_BACKGROUND_COLOR} from "../../helpers/constant";
import {isEmptyObject} from '../../helpers/validate';

class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      formData: {
        email: '', password: '', confirmPassword: ''
      },
      validData: {
        email: false, password: false, confirmPassword: false
      },
    };
    this.handleInputSave = this.handleInputSave.bind(this);
    this.handleSetValid = this.handleSetValid.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit() {
    let {email, password, confirmPassword} = this.state.formData;
    let {logInFromRegister} = this.props;
    let propsEmail = this.props.email;
    if (logInFromRegister === true) {
      if (password === confirmPassword) {
        this.props.onSubmit(propsEmail, password, logInFromRegister);
      }
    } else {
      this.props.onSubmit(email, password, logInFromRegister);
    }
  }

  render() {
    let emailToShow = '';
    let {formData} = this.state;
    let {email, logInFromRegister} = this.props;
    if (!isEmptyObject(email)) {
      emailToShow = email
    } else {
      emailToShow = formData.email;
    }
    return (
      <Form>
        <FormGroup row>
          <Col sm={12}>
            <InputHoc labelName={"Email"}
                      type="email"
                      value={emailToShow}
                      name="email"
                      id="email"
                      onValueChange={this.handleInputSave}
                      onSetValid={this.handleSetValid}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={12}>
            <InputHoc labelName={"Password"}
                      type="password"
                      name="password"
                      id="password"
                      value={formData.password}
                      onValueChange={this.handleInputSave}
                      onSetValid={this.handleSetValid}/>
          </Col>
        </FormGroup>
        {(logInFromRegister) &&
        <FormGroup row>
          <Col sm={12}>
            <InputHoc labelName={"Confirm Password"}
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      value={formData.confirmPassword}
                      onValueChange={this.handleInputSave}
                      onSetValid={this.handleSetValid}/>
          </Col>
        </FormGroup>
        }
        <FormGroup row>
          <Col sm={12}>
            <Button className="login_button_style"
                    onClick={this.handleSubmit}>LogIn</Button><br/>
            {!(logInFromRegister) && <div>

              do not have an account?
              <a href={"/register"} className="register_link_style">register</a>
            </div>}
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

export default RegisterForm(LogIn);

