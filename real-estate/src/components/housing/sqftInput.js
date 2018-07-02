import React from 'react'
import {InputGroup, Input, InputGroupAddon} from "reactstrap/";
// import InputGroupAddon from "reactstrap/src/InputGroupAddon";


class sqftInput extends React.Component {

    state = {
        sqrt: 1500
    };

    onChangeInput = event => {
        this.setState({[event.target.name]: event.target.value})

    };
    render() {
        return (
            <div>
                <label>{this.props.name}</label>

                <InputGroup>
                    <Input placeholder="Amount" name="sqrt" type="number" step="20" value={this.state.sqrt} onChange={this.onChangeInput}/>
                    <InputGroupAddon addonType="append">SQFT</InputGroupAddon>
                </InputGroup>

            </div>
        );
    }
}

export default sqftInput;