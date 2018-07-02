import React from 'react'

class sqftInput extends React.Component {

    render() {
        return (
            <div>
                <label>{this.props.name}</label>
                <input/>
            </div>
        );
    }
}

export default sqftInput;