import React from "react";
import "../../CSS/SqftInput.css";
import { FormGroup, Input } from "reactstrap";

class checkbox extends React.Component {
  state = {
    checked: this.props.checkbox
  };

  onChangeInput = event => {
    this.setState({ [event.target.name]: event.target.checked });
    this.props.callback(event.target.checked);
  };

  render() {
    return (
      <div>
        <FormGroup check>
          <Input
            id={this.state.checked}
            type="checkbox"
            onChange={e => this.onChangeInput(e)}
          />
          <span>{this.props.name}</span>
        </FormGroup>
      </div>
    );
  }
}

export default checkbox;
