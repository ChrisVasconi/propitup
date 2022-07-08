import React, { Component } from 'react';


class PropComponent extends Component {

    render() {
        const { FirstName, LastName, Age, HairColor } = this.props; //Like classes, need the names of what ur calling

        return (
            <div>
                <h1>{LastName}, {FirstName} </h1>
                <p> Age: {Age} </p>
                <p> Haircolor: {HairColor} </p>
            </div>
        )
    }
}

export default PropComponent;