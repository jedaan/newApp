import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {validateEmail, validateNumber, validateText} from '../../helpers/validate';
import {Input, Label} from 'reactstrap';

class InputHoc extends Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = {
      valid: true
    };
  }

  /*
  * handle on change .
  * */
  handleOnChange(e) {
    this.props.onValueChange(e.target.name, e.target.value);
  }

  handleBlur(e) {
    let valid = false;
    switch (this.props.type) {
      case 'text':
        valid = validateText(e.target.value);
        this.setState({valid});
        break;
      case 'email':
        valid = validateEmail(e.target.value);
        this.setState({valid});
        break;
      case 'password':
      case 'phone':
        valid = validateNumber(e.target.value);
        this.setState({valid});
        break;
      default:
        break;
    }
    this.props.onSetValid(e.target.name, valid);
  }

  render() {
    let {valid} = this.state;
    let {id, labelName, onValueChange, onSetValid, ...other} = this.props;
    return (
      <div>
        <Label for={id}>{labelName}</Label>
        {(valid) ?
          <Input className="input_style" id={id} {...other} onChange={(e) => this.handleOnChange(e)}
                 onBlur={(e) => this.handleBlur(e)}/>
          :
          <Input {...other} invalid onChange={(e) => this.handleOnChange(e)}
                 onBlur={(e) => this.handleBlur(e)}/>}
      </div>
    );
  }
}

InputHoc.propTypes = {
  labelName: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,

};

export default InputHoc;
