import React, {Component} from 'react';
import {validate, isEmptyObject, isEmptyArray} from '../../helpers/validate';

const RegisterForm = (WrappedComponent) => {
  return class Cmp extends Component {
    constructor(props) {
      super(props);
      this.state = {};

      this.handleInputSave = this.handleInputSave.bind(this);
      this.handleSubmitForm = this.handleSubmitForm.bind(this);
      this.handleSetValid = this.handleSetValid.bind(this);
      this.deepClone = this.deepClone.bind(this);
      this.handleSubmitAddForm = this.handleSubmitAddForm.bind(this);
    }

    deepClone(data) {
      return Object.assign({}, data);
    }

    handleInputSave(data, name, value, content) {
      let formData = this.deepClone(data);
      formData[name] = value;
      if (!isEmptyObject(content)) {
        formData[name + "Content"] = content;
      }
      return formData;
    }

    handleSetValid(data, name, valid) {
      let validData = this.deepClone(data);
      validData[name] = valid;
      return validData;
    }

    handleSubmitForm(formData, validData) {
      if (validate(validData)) {
        this.props.onSubmit(formData);
      } else {
        //ToDo --
      }
    }

    handleSubmitAddForm() {
      let valid = true;
      for (let i = 1; i < arguments.length; i++) {
        if (isEmptyArray(arguments[i])) {
          valid = false;
        }
      }
      if (valid === true) {
        this.props.onSubmit(arguments);
      } else {
        //ToDo --
      }
    }

    render() {
      return (
        <WrappedComponent {...this.props} onInputSave={this.handleInputSave}
                          onSetValid={this.handleSetValid}
                          onSubmitForm={this.handleSubmitForm}
                          onSubmitAddForm={this.handleSubmitAddForm}/>
      );
    }
  };

};

export default RegisterForm;
