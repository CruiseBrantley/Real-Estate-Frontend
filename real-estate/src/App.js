import React, { Component } from "react";
import "./CSS/App.css";
import SqftInput from "./components/housing/sqftInput";
import ZipInput from "./components/housing/zipInput";
import SmallValues from "./components/housing/smallValues";
import Checkbox from "./components/housing/checkbox";

class App extends Component {
  state = {
    liveableSqft: 1500,
    lotSqft: 2000,
    numberBathrooms: 2,
    numberBedrooms: 3,
    floors: 1,
    condition: 3.4,
    grade: 7.65,
    yearBuilt: 2000,
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
  changeBedrooms = value => {
    this.setState({ numberBedrooms: value });
  };
  changeBathrooms = value => {
    this.setState({ numberBathrooms: value });
  };
  changeFloors = value => {
    this.setState({ floors: value });
  };
  changeZip = value => {
    this.setState({ zip: value });
  };
  changeCondition = value => {
    this.setState({ condition: value });
  };
  changeGrade = value => {
    this.setState({ grade: value });
  };

  render() {
    return (
      <div className="App">
        <h1>Real Estate Value Calculator</h1>
        <div className="main-container">
          <div className="left-column">
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
            <br />
            <ZipInput
              name="Condition"
              placeholder="Between 1 and 5"
              callback={this.changeCondition}
            />
            <ZipInput
              name="Grade"
              placeholder="Between 1 and 13"
              callback={this.changeGrade}
            />
            <br />
            <ZipInput
              name="Zip Code"
              placeholder="*Required ZIP"
              zip={this.state.zip}
              callback={this.changeZip}
            />
            <ZipInput
              name="Year Built"
              placeholder="*Required Year"
              callback={this.changeZip}
            />
          </div>
          <div className="right-column">
            <SmallValues
              callback={this.changeFloors}
              name="Floors"
              rooms={this.state.floors}
            />
            <br />
            <SmallValues
              callback={this.changeBedrooms}
              name="Bedrooms"
              rooms={this.state.numberBedrooms}
            />
            <br />
            <SmallValues
              callback={this.changeBathrooms}
              name="Bathrooms"
              rooms={this.state.numberBathrooms}
            />
          </div>
          {/* <Checkbox callback={this.changeGarage} name="Garage" /> */}
        </div>
      </div>
    );
  }
}

export default App;
