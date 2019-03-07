import React, {Component} from 'react';
import {validateNumber} from '../../helpers/validate'
import {Input, Label} from "reactstrap";

class OptionHoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valid: true
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    let selectedIndex = e.target.selectedIndex;
    let content = this.props.data[selectedIndex - 1].name;
    this.props.onValueChange(e.target.name, e.target.value, content);
  }

  handleOnBlur(e) {
    let valid = false;
    if (e.target.selectedIndex > 0) {
      valid = true;
      this.setState({valid});
    }
    this.props.onSetValid(e.target.name, valid)
  }

  render() {
    let {valid} = this.state;
    let {labelName, onValueChange, onSetValid, data, ...other} = this.props;
    return (
      <div>
        <Label for="">{labelName}</Label>
        <Input {...other} onChange={((e) => this.handleOnChange(e))}
               onBlur={(e) => this.handleOnBlur(e)}>
          <option className="hidden_option" key={-1} value={-1}></option>
          {data.map((item, index) =>
            <option key={index} value={item.id}>{item.name}</option>
          )}
        </Input>

      </div>
    );
  }
}

export default OptionHoc;
