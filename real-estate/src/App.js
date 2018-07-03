import React, { Component } from "react";
import "./CSS/App.css";
import SqftInput from "./components/housing/sqftInput";
import ZipInput from "./components/housing/zipInput";
import SmallValues from "./components/housing/smallValues";
import { Button } from "reactstrap";
import axios from "axios";
import Checkbox from "./components/housing/checkbox";
import { CSVDownload, CSVLink } from "react-csv";

class App extends Component {
  state = {
    liveableSqft: 1500,
    lotSqft: 2000,
    basementSqft: 0,
    numberBathrooms: 2,
    numberBedrooms: 3,
    floors: 1,
    condition: 3.4,
    grade: 7.65,
    yearBuilt: 2000,
    zip: "98001",
    waterfront: false,
    postError: false
  };

  zipConverter = () => {
    switch (this.state.zip) {
      case "98001":
        return 260000;
        break;
      case "98002":
        return 235000;
        break;
      case "98003":
        return 267475;
        break;
      case "98004":
        return 950000;
        break;
      case "98005":
        return 757500;
        break;
      case "98006":
        return 745000;
        break;
      case "98007":
        return 555000;
        break;
      case "98008":
        return 541200;
        break;
      case "98010":
        return 338500;
        break;
      case "98011":
        return 470000;
        break;
      case "98014":
        return 375000;
        break;
      case "98019":
        return 400000;
        break;
      case "98022":
        return 267000;
        break;
      case "98023":
        return 268450;
        break;
      case "98024":
        return 400000;
        break;
      case "98027":
        return 565000;
        break;
      case "98028":
        return 445000;
        break;
      case "98029":
        return 571500;
        break;
      case "98030":
        return 282000;
        break;
      case "98031":
        return 288200;
        break;
      case "98032":
        return 249000;
        break;
      case "98033":
        return 670000;
        break;
      case "98034":
        return 445000;
        break;
      case "98038":
        return 337000;
        break;
      case "98039":
        return 1242500;
        break;
      case "98040":
        return 950000;
        break;
      case "98042":
        return 290000;
        break;
      case "98045":
        return 390000;
        break;
      case "98052":
        return 615000;
        break;
      case "98053":
        return 620000;
        break;
      case "98055":
        return 294950;
        break;
      case "98056":
        return 379800;
        break;
      case "98058":
        return 333000;
        break;
      case "98059":
        return 430000;
        break;
      case "98065":
        return 502500;
        break;
      case "98070":
        return 445000;
        break;
      case "98072":
        return 515000;
        break;
      case "98074":
        return 640000;
        break;
      case "98075":
        return 737444;
        break;
      case "98077":
        return 645000;
        break;
      case "98092":
        return 300000;
        break;
      case "98102":
        return 690000;
        break;
      case "98103":
        return 550000;
        break;
      case "98105":
        return 667000;
        break;
      case "98106":
        return 315000;
        break;
      case "98107":
        return 529950;
        break;
      case "98108":
        return 342500;
        break;
      case "98109":
        return 716000;
        break;
      case "98112":
        return 822500;
        break;
      case "98115":
        return 564750;
        break;
      case "98116":
        return 560000;
        break;
      case "98117":
        return 544000;
        break;
      case "98118":
        return 367500;
        break;
      case "98119":
        return 721500;
        break;
      case "98122":
        return 561625;
        break;
      case "98125":
        return 425000;
        break;
      case "98126":
        return 395750;
        break;
      case "98133":
        return 375000;
        break;
      case "98136":
        return 485000;
        break;
      case "98144":
        return 450000;
        break;
      case "98146":
        return 305000;
        break;
      case "98148":
        return 278000;
        break;
      case "98155":
        return 373000;
        break;
      case "98166":
        return 389999;
        break;
      case "98168":
        return 235000;
        break;
      case "98177":
        return 535550;
        break;
      case "98178":
        return 277554;
        break;
      case "98188":
        return 264000;
        break;
      case "98198":
        return 265000;
        break;
      case "98199":
        return 673750;
        break;
      default:
        return this.state.zip;
    }
  };

  calculateAge = () => {
    return 2018 - this.state.yearBuilt;
  };

  changeBasementSqft = value => {
    this.setState({ basementSqft: value });
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
  changeWaterfront = value => {
    this.setState({ waterfront: value });
  };
  changeYearBuilt = value => {
    this.setState({ yearBuilt: value });
  };

  submitButton = () => {
    let zip = this.zipConverter(this.state.zip);
    axios
      .post("https://realestatehackathon.azure-api.net", {
        Inputs: {
          input1: {
            ColumnNames: [
              "price",
              "bedrooms",
              "bathrooms",
              "sqft_living",
              "sqft_lot",
              "floors",
              "condition",
              "grade",
              "yr_built",
              "zipcode"
            ],
            Values: [
              ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
              ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]
            ]
          }
        },
        GlobalParameters: {}
      })
      .then(response => {
        if (response) {
          console.log(response);
        } else console.log("Something went wrong.");
      })
      .catch(response => {
        console.log(response);
        this.setState({ postError: true });
      });
  };

  createCSV = () => {
    return (
      <CSVDownload
        data={String([
          this.state.numberBedrooms,
          this.state.numberBathrooms,
          this.state.liveableSqft,
          this.state.lotSqft,
          this.state.waterfront,
          this.state.condition,
          this.state.grade,
          this.state.basementSqft,
          this.calculateAge(),
          this.state.floors,
          this.zipConverter()
        ])}
      />
    );
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
            <SqftInput
              name="Basement"
              sqft={this.state.basementSqft}
              callback={this.changeBasementSqft}
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
              zip={this.state.yearBuilt}
              callback={this.changeYearBuilt}
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
            <br />
            <Checkbox callback={this.changeWaterfront} name="Waterfront" />
          </div>
        </div>
        <Button color="primary" onClick={e => this.submitButton()}>
          Submit
        </Button>{" "}
        <CSVLink
          data={String([
            this.state.numberBedrooms,
            this.state.numberBathrooms,
            this.state.liveableSqft,
            this.state.lotSqft,
            this.state.waterfront ? 1 : 0,
            this.state.condition,
            this.state.grade,
            this.state.basementSqft,
            String(this.calculateAge()),
            this.state.floors,
            String(this.zipConverter())
          ])}
        >
          CSV
        </CSVLink>
        {this.state.postError ? <h1>Server Error</h1> : null}
      </div>
    );
  }
}

export default App;
