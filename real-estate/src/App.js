import React, { Component } from "react";
import logo from "./logo.svg";
import "./CSS/App.css";
import SqftInput from "./components/housing/sqftInput";
import { Button } from "reactstrap";
class App extends Component {
  state = {
    liveableSqft: 1500,
    totalSqft: 1500,
    carportSqft: 500,
    garageSqft: 500,
    garageType: false,
    fireplace: false,
    centralHeating: false,
    centralCooling: false,
    city: "",
    zip: null
  };

  changeLiveableSqft = value => {
    this.setState({ liveableSqft: value });
  };
  changeTotalSqft = value => {
    this.setState({ totalSqft: value });
  };
  changeCarportSqft = value => {
    this.setState({ carportSqft: value });
  };
  changeGarageSqft = value => {
    this.setState({ garageSqft: value });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="main-container">
          <SqftInput
            name="Total Space"
            sqft={this.state.totalSqft}
            callback={this.changeTotalSqft}
          />
          <SqftInput
            name="Living Space"
            sqft={this.state.liveableSqft}
            callback={this.changeLiveableSqft}
          />
          <SqftInput
            name="Garage Space"
            sqft={this.state.garageSqft}
            callback={this.changeGarageSqft}
          />
          <SqftInput
            name="Carport Space"
            sqft={this.state.carportSqft}
            callback={this.changeCarportSqft}
          />
        </div>
      </div>
    );
  }
}

export default App;
