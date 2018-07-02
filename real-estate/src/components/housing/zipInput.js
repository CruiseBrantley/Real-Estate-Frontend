import React from "react";
import { InputGroup, Input, InputGroupAddon } from "reactstrap/";
import "../../CSS/SqftInput.css";

class ZipInput extends React.Component {
  state = {
    zip: this.props.zip
  };

  onChangeInput = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.props.callback(event.target.value);
  };

  render() {
    return (
      <div>
        <InputGroup>
          <InputGroupAddon addonType="prepend" className="prepend-class">
            {this.props.name}
          </InputGroupAddon>
          <Input
            placeholder="ZIP"
            name="zip"
            type="number"
            value={this.state.zip}
            onChange={e => this.onChangeInput(e)}
          />
        </InputGroup>
      </div>
    );
  }
}

export default ZipInput;
