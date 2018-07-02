import React from 'react'
import {InputGroup, Input, InputGroupAddon} from "reactstrap/";
// import InputGroupAddon from "reactstrap/src/InputGroupAddon";


class sqftInput extends React.Component {

    render() {
        return (
            <div>
                <label>{this.props.name}</label>

                <InputGroup>
                    <Input placeholder="Amount" type="number" step="1" />
                    <InputGroupAddon addonType="append">SQFT</InputGroupAddon>
                </InputGroup>

            </div>
        );
    }
}

export default sqftInput;