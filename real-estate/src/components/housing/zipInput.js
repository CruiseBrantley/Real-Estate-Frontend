import React from "react";
import { InputGroup, Input, InputGroupAddon } from "reactstrap/";
import "../../CSS/SqftInput.css";
import "../../CSS/zip.css";

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
            placeholder={this.props.placeholder}
            name="zip"
            value={this.state.zip}
            onChange={e => this.onChangeInput(e)}
          />
        </InputGroup>
      </div>
    );
  }
}

export default ZipInput;
