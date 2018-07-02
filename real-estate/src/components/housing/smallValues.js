import React from "react";
import { InputGroup, Button, ButtonGroup, InputGroupAddon } from "reactstrap/";
import "../../CSS/smallValues.css";

class SmallValues extends React.Component {
  state = {
    smallNumber: this.props.smallNumber
  };

  onChangeInput = event => {
    this.setState({ smallNumber: event });
    this.props.callback(event);
  };

  render() {
    return (
      <div>
        <InputGroup>
          <h5>{this.props.name}</h5>
          <ButtonGroup>
            <Button
              color="primary"
              onClick={() => this.onChangeInput(1)}
              active={this.state.rSelected === 1}
            >
              One
            </Button>
            <Button
              color="primary"
              onClick={() => this.onChangeInput(2)}
              active={this.state.rSelected === 2}
            >
              Two
            </Button>
            <Button
              color="primary"
              onClick={() => this.onChangeInput(3)}
              active={this.state.rSelected === 3}
            >
              Three
            </Button>
          </ButtonGroup>
          <p>Selected: {this.state.smallNumber}</p>
        </InputGroup>
      </div>
    );
  }
}

export default SmallValues;
