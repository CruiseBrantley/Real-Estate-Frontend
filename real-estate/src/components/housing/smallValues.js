import React from "react";
import { InputGroup, Button, ButtonGroup } from "reactstrap/";
import "../../CSS/smallValues.css";

class SmallValues extends React.Component {
  state = {
    smallNumber: this.props.rooms
  };

  onChangeInput = event => {
    this.setState({ smallNumber: event });
    this.props.callback(event);
  };

  render() {
    return (
      <div>
        <h5>{this.props.name}</h5>
        <InputGroup className="small-values">
          <ButtonGroup>
            <Button
              color="primary"
              onClick={() => this.onChangeInput(1)}
              active={this.state.smallNumber === 1}
            >
              One
            </Button>
            <Button
              color="primary"
              onClick={() => this.onChangeInput(2)}
              active={this.state.smallNumber === 2}
            >
              Two
            </Button>
            <Button
              color="primary"
              onClick={() => this.onChangeInput(3)}
              active={this.state.smallNumber === 3}
            >
              Three
            </Button>
            <Button
              color="primary"
              onClick={() => this.onChangeInput(4)}
              active={this.state.smallNumber === 4}
            >
              Four
            </Button>
            <Button
              color="primary"
              onClick={() => this.onChangeInput(5)}
              active={this.state.smallNumber === 5}
            >
              Five
            </Button>
          </ButtonGroup>
        </InputGroup>
      </div>
    );
  }
}

export default SmallValues;
