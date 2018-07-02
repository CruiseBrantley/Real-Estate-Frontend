import React, { Component } from "react";
import logo from "./logo.svg";
import "./CSS/App.css";
import SqftInput from "./components/housing/sqftInput";
import ZipInput from "./components/housing/zipInput";
import Checkbox from "./components/housing/checkbox";
import { Button } from "reactstrap";
class App extends Component {
  state = {
    liveableSqft: 1500,
    lotSqft: 2000,
    numberBathrooms: 2,
    numberBedrooms: 3,
    floors: 2,
    condition: 3.4,
    grade: 7.65,
    yearBuilt: 2000,
    garage: false,
    zip: null
  };

  changeLiveableSqft = value => {
    this.setState({ liveableSqft: value });
  };
  changeLotSqft = value => {
    this.setState({ lotSqft: value });
  };
  changeGarage = value => {
    this.setState({ garage: value });
  };
  changeZip = value => {
    this.setState({ zip: value });
  };

  render() {
    return (
      <div className="App">
        <div className="main-container">
          <SqftInput
            name="Lot Space"
            sqft={this.state.lotSqft}
            callback={this.changeLotSqft}
          />
          <SqftInput
            name="Living Space"
            sqft={this.state.liveableSqft}
            callback={this.changeLiveableSqft}
          />
          <ZipInput
            name="Zip Code"
            zip={this.state.zip}
            callback={this.changeZip}
          />
          <Checkbox callback={this.changeGarage} name="Garage" />
        </div>
      </div>
    );
  }
}

export default App;
